import nipyapi.canvas
import nipyapi.config
import nipyapi.security

# NiFi Configuration
nifi_url = "https://openchallenges-nifi:8443/nifi-api"
username = "openchallenges"
password = "changemechangeme"


def connect_to_nifi():
    """
    Connects to the local NiFi instance and retrieves the root process group ID.
    """
    try:
        # Disable SSL certificate verification
        nipyapi.utils.set_endpoint(nifi_url)
        nipyapi.security.set_service_ssl_context(verify=False)

        # Authenticate with NiFi
        nipyapi.security.service_login(
            service="nifi", username=username, password=password
        )

        # Fetch the root process group
        root_pg = nipyapi.canvas.get_process_group("root")

        if root_pg:
            print(f"Root Process Group ID: {root_pg.id}")
        else:
            print("Unable to retrieve the root process group.")
    except Exception as e:
        print(f"Error connecting to NiFi: {e}")


if __name__ == "__main__":
    connect_to_nifi()
