#!/usr/bin/env bash

# This script sends a request to a server using mutual TLS (mTLS) for authentication. It must be
# executed from the project directory. A successful request is indicated by an exit status of 0. The
# server's certificate is verified against the provided Root CA, and the client authenticates itself
# using the specified PKCS#12 client certificate.

curl --cacert certs/root-ca/root-ca.pem \
  --cert-type P12 --cert certs/client/client.p12:changemechangeme \
  https://localhost:8443