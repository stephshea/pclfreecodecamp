var count = 0;

function cc(card) {
  // Only change code below this line
  if (card >1 && card <7) {
    count ++;
  }
  if (card >6 && card <10) {
    count = count;
  }
  if ( card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === "A") {
    count --;
  } 

  if (count <= 0) {
    return count + ' Hold';
  }
  else if( count > 0) {
    return count + ' Bet';
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');