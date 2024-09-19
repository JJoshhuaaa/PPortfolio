using System;
using MySql.Data.MySqlClient;

class MySqlConnector
{
    static void Main(string[] args)
    {
        // Define your connection string (adjust based on your setup)
        string connectionString = "Server=localhost;Database=mydb;User ID=myuser;Password=mypassword;";

        // Create a connection object
        using (MySqlConnection conn = new MySqlConnection(connectionString))
        {
            try
            {
                // Open the connection
                conn.Open();
                Console.WriteLine("Connection successful!");

                // Example query
                string query = "SELECT * FROM mytable";
                MySqlCommand cmd = new MySqlCommand(query, conn);

                // Execute the query and read the data
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Console.WriteLine($"ID: {reader["id"]}, Name: {reader["name"]}");
                    }
                }
            }
            catch (MySqlException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}
