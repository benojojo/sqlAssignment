1.	SELECT COUNT (*) FROM User;
2.	SELECT COUNT (*) FROM User WHERE Department = 'Accounting';
3.	SELECT COUNT (*) FROM User WHERE Status = 'Pending';
4.	SELECT * FROM User 
    ORDER BY Created_dt ASC LIMIT 5 ;
5.	SELECT * FROM User WHERE age > 18 or <26;
6.	SELECT * FROM User WHERE Created_dt = '04-01-2022';
7.	SELECT *FROM User WHERE Created_dt  ='08-01-2022' BETWEEN 06-01-2022;
8.	UPDATE User
              SET Status = 'Active' where ID = 2 OR 4 OR 6;
9.	 UPDATE User  
SET Name ='Timothy' WHERE ID = 2;
10.	 SELECT COUNT(Name) Department FROM User GROUP BY Department