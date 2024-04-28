import psycopg2
from psycopg2 import OperationalError
import json

def create_connection(db_name, db_user, db_password, db_host, db_port):
    try:
        connection = psycopg2.connect(
            dbname=db_name,
            user=db_user,
            password=db_password,
            host=db_host,
            port=db_port
        )
        return connection
    except OperationalError as e:
        print(f"Error: {e}")
        return None

def execute_query(connection, query, data=None):
    if connection:
        try:
            cursor = connection.cursor()
            cursor.execute(query, data)
            rows = cursor.fetchall()
            
            print("Results:")
            for row in rows:
                print(row)
        except psycopg2.Error as e:
            print(f"Error executing query: {e}")
        finally:
            if connection:
                connection.commit()
                connection.close()
                print("Connection closed.")

if __name__ == "__main__":
    # Replace these values with your PostgreSQL server details
    db_name = "postgres"
    db_user = "postgres"
    db_password = "bzwhbzwh"
    db_host = "produkty-veselestolky.c7trmbxivoxg.eu-north-1.rds.amazonaws.com"
    db_port = "5432"

    interaction_data = {
        "key77": "value7",
    }

    query = "SELECT * FROM user_interactions;"
    data = (json.dumps(interaction_data),)  # Convert the Python dictionary to a JSON string

    connection = create_connection(db_name, db_user, db_password, db_host, db_port)
    if connection:
        execute_query(connection, query, data)
    else:
        print("Connection failed.")
