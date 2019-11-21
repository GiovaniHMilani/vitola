import mysql.connector
from mysql.connector import Error
from mysql.connector import errorcode
from datetime import datetime, timedelta
import requests

API_ENDPOINT = "localhost:4000/liberacao"

try:
    connection = mysql.connector.connect(host='localhost',
                                         port='3307',
                                         database='crawler',
                                         user='root',
                                         password='root')
                                         
    query = ('SELECT * FROM `crawler`.`Produtos`')

    cursor = connection.cursor()
    result = cursor.execute(query)
    resultTotal = cursor.fetchall()

    for row in resultTotal:
        now = datetime.now()

        time_diff = timedelta(days=0,
                    hours=0,
                    minutes=1)

        if  row[1] <= now and row[1] > (now - time_diff):
            data = {'nome': teste, 
                    'email': teste1, 
                    'produto':row[2]} 
            
            r = requests.post(url = API_ENDPOINT, data = data)
            pastebin_url = r.text 

except mysql.connector.Error as error:
    print('Exception:', format(error)) 