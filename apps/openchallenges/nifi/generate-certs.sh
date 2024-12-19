#!/bin/bash

# Define variables
ROOT_CA_KEY="certs/root-ca/root-ca.key"
ROOT_CA_CERT="certs/root-ca/root-ca.pem"
ROOT_CA_SERIAL="certs/root-ca/root-ca.srl"
ROOT_CA_SUBJECT="/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=root-ca"

NIFI_KEY="certs/nifi/nifi.key"
NIFI_CSR="certs/nifi/nifi.csr"
NIFI_CERT="certs/nifi/nifi.crt"
NIFI_SUBJECT="/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=localhost"
NIFI_SAN="subjectAltName=DNS:localhost,IP:127.0.0.1"

CLIENT_KEY="certs/client/client.key"
CLIENT_CSR="certs/client/client.csr"
CLIENT_CERT="certs/client/client.crt"
# The subject of the client certificate must match the value of INITIAL_ADMIN_IDENTITY.
CLIENT_SUBJECT="/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=client"

NIFI_PKCS12="certs/nifi/nifi.p12"
NIFI_KEYSTORE="certs/nifi/keystore.jks"
NIFI_TRUSTSTORE="certs/nifi/truststore.jks"
CLIENT_PKCS12="certs/client/client.p12"

PASSWORD="changemechangeme"  # Use the same password for all keystore and key operations

# Prepare directories
mkdir -p certs/{client,nifi,root-ca}

# Generate the Root CA key and certificate
openssl genrsa -aes256 -passout pass:$PASSWORD -out $ROOT_CA_KEY 4096
openssl req -x509 -new -nodes -key $ROOT_CA_KEY -sha256 -days 3650 -out $ROOT_CA_CERT -subj "$ROOT_CA_SUBJECT" -passin pass:$PASSWORD

# Generate NiFi's private key
openssl genrsa -out $NIFI_KEY 2048
# Generate NiFi's CSR with SAN
openssl req -new -key $NIFI_KEY -out $NIFI_CSR -subj "$NIFI_SUBJECT" -addext "$NIFI_SAN"

# Sign NiFi's CSR with the Root CA
openssl x509 -req -in $NIFI_CSR -CA $ROOT_CA_CERT -CAkey $ROOT_CA_KEY -CAcreateserial -out $NIFI_CERT -days 3650 -sha256 -passin pass:$PASSWORD \
  -extfile <(printf "$NIFI_SAN")

# Generate NiFi PKCS12 keystore
openssl pkcs12 -export -in $NIFI_CERT -inkey $NIFI_KEY -out $NIFI_PKCS12 -name nifi -CAfile $ROOT_CA_CERT -caname root-ca -chain -passout pass:$PASSWORD

# Convert NiFi PKCS12 to Java keystore
keytool -importkeystore -destkeystore $NIFI_KEYSTORE -srckeystore $NIFI_PKCS12 -srcstoretype PKCS12 -alias nifi -deststorepass $PASSWORD -srcstorepass $PASSWORD

# Create a truststore with the Root CA
keytool -import -trustcacerts -noprompt -keystore $NIFI_TRUSTSTORE -file $ROOT_CA_CERT -alias root-ca -storepass $PASSWORD

# Generate Client private key and CSR
openssl genrsa -out $CLIENT_KEY 2048
openssl req -new -key $CLIENT_KEY -out $CLIENT_CSR -subj "$CLIENT_SUBJECT"

# Sign the Client CSR with the Root CA
openssl x509 -req -in $CLIENT_CSR -CA $ROOT_CA_CERT -CAkey $ROOT_CA_KEY -CAcreateserial -out $CLIENT_CERT -days 3650 -sha256 -passin pass:$PASSWORD

# Generate PKCS12 for the Client certificate
openssl pkcs12 -export -in $CLIENT_CERT -inkey $CLIENT_KEY -out $CLIENT_PKCS12 -name client -CAfile $ROOT_CA_CERT -caname root-ca -chain -passout pass:$PASSWORD

# Output paths
echo "NiFi Keystore: $NIFI_KEYSTORE"
echo "NiFi Truststore: $NIFI_TRUSTSTORE"
echo "Client PKCS12 for Firefox: $CLIENT_PKCS12"

# Check: Run the following command to verify that the certificate and private key match:
openssl x509 -noout -modulus -in certs/client/client.crt | openssl md5
openssl rsa -noout -modulus -in certs/client/client.key | openssl md5

# Check: Verify that the Root CA used to sign client.crt is imported into NiFi's truststore:
keytool -list -keystore $NIFI_TRUSTSTORE -storepass $PASSWORD
# Look for the alias of the Root CA.


