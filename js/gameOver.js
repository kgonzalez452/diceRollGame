function gameOver(winner){
    
    const circlePosition = circle.getBoundingClientRect()
    
    console.log(circlePosition)
    
    winner.style.top = circlePosition.top + 'px'
    winner.style.left = circlePosition.left + 'px'
    winner.classList.add('winner')
    winner.classList.add('alter-ego')
    
    
    setTimeout(function(){
        if(player1 === winner){
            alert('Didn\'t Think I\'d Get This Far')
        } else if(player2 === winner){
            alert('MEEP! MEEP!')
        }       
        location.reload()

}, 2000)

}

