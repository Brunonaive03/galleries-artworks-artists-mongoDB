

//WHERE + FUNCTION + PRETTY: artistas que morreram com menos de 50 anos
db.artistas.find({
    $where: function(){
    return ((this.ano_morte - this.ano_nasc) < 50)
}}).pretty();


//Use "better comments" extension for a proper visualization of the checlist ;)

/*
--CHECKLIST--

! 1. USE 
! 2. FIND 
! 3. SIZE 
! 4. AGGREGATE 
! 5. MATCH 
! 6. PROJECT 
! 7. GTE 
! 8. GROUP 
! 9. SUM 
! 10. COUNT 
! 11. MAX 
! 12. AVG 
! 13. EXISTS 
! 14. SORT 
! 15. LIMIT 
* 16. $WHERE
! 17. MAPREDUCE 
* 18. FUNCTION 
* 19. PRETTY 
! 20. ALL 
! 21. SET 
! 22. TEXT 
! 23. SEARCH 
! 24. FILTER 
! 25. UPDATE 
! 26. SAVE 
! 27. RENAMECOLLECTION 
! 28. COND 
! 29. LOOKUP 
! 30. FINDONE 
! 31. ADDTOSET 

*/