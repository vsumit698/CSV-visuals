# CSV-visuals
CSV File Data Visualizer with multiple search features


1.  Upload any csv file into the system (consider the delimiter to be a comma ‘ , ’).

2.  When the user selects a file, display all the data (with column headers) in a table on the page (front end).

3.  Search box feature is provide which searches on the front end itself and displays the matching rows of the table only (empty search box displays all the data). 
     (you can put a search on any one column)

4.  // opens a home page of web

    URL - http://localhost:8000/ ( GET )
    
5.  // upload a csv file to local system and create a entry in database

    URL - http://localhost:8000/upload_file  ( POST )
    
6.  // opens a csv file to view by multiple search options

    URL - http://localhost:8000/openFile/:id ( GET )
