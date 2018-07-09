jQuery.fn.outerHTML = function() {
  return jQuery('<div />').append(this.eq(0).clone()).html();
};

function Shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

function orderCards(pile, cards, belongs) {
  var tmp_cards = new  Array();
  tmp_cards = [].concat(cards);
  switch(pile) {
    case 0:
      switch(belongs) {
        case "top":
          cards[0] = tmp_cards[0];
          cards[1] = tmp_cards[3];
          cards[2] = tmp_cards[6];
          cards[3] = tmp_cards[9];
          cards[4] = tmp_cards[12];
          cards[5] = tmp_cards[15];
          cards[6] = tmp_cards[18];
          cards[7] = tmp_cards[21];
          cards[8] = tmp_cards[24];
          cards[9] = tmp_cards[1];
          cards[10] = tmp_cards[4];
          cards[11] = tmp_cards[7];
          cards[12] = tmp_cards[10];
          cards[13] = tmp_cards[13];
          cards[14] = tmp_cards[16];
          cards[15] = tmp_cards[19];
          cards[16] = tmp_cards[22];
          cards[17] = tmp_cards[25];
          cards[18] = tmp_cards[2];
          cards[19] = tmp_cards[5];
          cards[20] = tmp_cards[8];
          cards[21] = tmp_cards[11];
          cards[22] = tmp_cards[14];
          cards[23] = tmp_cards[17];
          cards[24] = tmp_cards[20];
          cards[25] = tmp_cards[23];
          cards[26] = tmp_cards[26];
          break;
        case "middle":
          cards[0] = tmp_cards[1];
          cards[1] = tmp_cards[4];
          cards[2] = tmp_cards[7];
          cards[3] = tmp_cards[10];
          cards[4] = tmp_cards[13];
          cards[5] = tmp_cards[16];
          cards[6] = tmp_cards[19];
          cards[7] = tmp_cards[22];
          cards[8] = tmp_cards[25];
          cards[9] = tmp_cards[0];
          cards[10] = tmp_cards[3];
          cards[11] = tmp_cards[6];
          cards[12] = tmp_cards[9];
          cards[13] = tmp_cards[12];
          cards[14] = tmp_cards[15];
          cards[15] = tmp_cards[18];
          cards[16] = tmp_cards[21];
          cards[17] = tmp_cards[24];
          cards[18] = tmp_cards[2];
          cards[19] = tmp_cards[5];
          cards[20] = tmp_cards[8];
          cards[21] = tmp_cards[11];
          cards[22] = tmp_cards[14];
          cards[23] = tmp_cards[17];
          cards[24] = tmp_cards[20];
          cards[25] = tmp_cards[23];
          cards[26] = tmp_cards[26];
          break;
        case "bottom":
          cards[0] = tmp_cards[2];
          cards[1] = tmp_cards[5];
          cards[2] = tmp_cards[8];
          cards[3] = tmp_cards[11];
          cards[4] = tmp_cards[14];
          cards[5] = tmp_cards[17];
          cards[6] = tmp_cards[20];
          cards[7] = tmp_cards[23];
          cards[8] = tmp_cards[26];
          cards[9] = tmp_cards[1];
          cards[10] = tmp_cards[4];
          cards[11] = tmp_cards[7];
          cards[12] = tmp_cards[10];
          cards[13] = tmp_cards[13];
          cards[14] = tmp_cards[16];
          cards[15] = tmp_cards[19];
          cards[16] = tmp_cards[22];
          cards[17] = tmp_cards[25];
          cards[18] = tmp_cards[0];
          cards[19] = tmp_cards[3];
          cards[20] = tmp_cards[6];
          cards[21] = tmp_cards[9];
          cards[22] = tmp_cards[12];
          cards[23] = tmp_cards[15];
          cards[24] = tmp_cards[18];
          cards[25] = tmp_cards[21];
          cards[26] = tmp_cards[24];
          break;
        }
      break;
    case 1:
      switch(belongs) {
        case "top":
          cards[0] = tmp_cards[1];
          cards[1] = tmp_cards[4];
          cards[2] = tmp_cards[7];
          cards[3] = tmp_cards[10];
          cards[4] = tmp_cards[13];
          cards[5] = tmp_cards[16];
          cards[6] = tmp_cards[19];
          cards[7] = tmp_cards[22];
          cards[8] = tmp_cards[25];
          cards[9] = tmp_cards[0];
          cards[10] = tmp_cards[3];
          cards[11] = tmp_cards[6];
          cards[12] = tmp_cards[9];
          cards[13] = tmp_cards[12];
          cards[14] = tmp_cards[15];
          cards[15] = tmp_cards[18];
          cards[16] = tmp_cards[21];
          cards[17] = tmp_cards[24];
          cards[18] = tmp_cards[2];
          cards[19] = tmp_cards[5];
          cards[20] = tmp_cards[8];
          cards[21] = tmp_cards[11];
          cards[22] = tmp_cards[14];
          cards[23] = tmp_cards[17];
          cards[24] = tmp_cards[20];
          cards[25] = tmp_cards[23];
          cards[26] = tmp_cards[26];
          break;
        case "middle":
          cards[0] = tmp_cards[0];
          cards[1] = tmp_cards[3];
          cards[2] = tmp_cards[6];
          cards[3] = tmp_cards[9];
          cards[4] = tmp_cards[12];
          cards[5] = tmp_cards[15];
          cards[6] = tmp_cards[18];
          cards[7] = tmp_cards[21];
          cards[8] = tmp_cards[24];
          cards[9] = tmp_cards[1];
          cards[10] = tmp_cards[4];
          cards[11] = tmp_cards[7];
          cards[12] = tmp_cards[10];
          cards[13] = tmp_cards[13];
          cards[14] = tmp_cards[16];
          cards[15] = tmp_cards[19];
          cards[16] = tmp_cards[22];
          cards[17] = tmp_cards[25];
          cards[18] = tmp_cards[2];
          cards[19] = tmp_cards[5];
          cards[20] = tmp_cards[8];
          cards[21] = tmp_cards[11];
          cards[22] = tmp_cards[14];
          cards[23] = tmp_cards[17];
          cards[24] = tmp_cards[20];
          cards[25] = tmp_cards[23];
          cards[26] = tmp_cards[26];
          break;
        case "bottom":
          cards[0] = tmp_cards[2];
          cards[1] = tmp_cards[5];
          cards[2] = tmp_cards[8];
          cards[3] = tmp_cards[11];
          cards[4] = tmp_cards[14];
          cards[5] = tmp_cards[17];
          cards[6] = tmp_cards[20];
          cards[7] = tmp_cards[23];
          cards[8] = tmp_cards[26];
          cards[9] = tmp_cards[0];
          cards[10] = tmp_cards[3];
          cards[11] = tmp_cards[6];
          cards[12] = tmp_cards[9];
          cards[13] = tmp_cards[12];
          cards[14] = tmp_cards[15];
          cards[15] = tmp_cards[18];
          cards[16] = tmp_cards[21];
          cards[17] = tmp_cards[24];
          cards[18] = tmp_cards[1];
          cards[19] = tmp_cards[4];
          cards[20] = tmp_cards[7];
          cards[21] = tmp_cards[10];
          cards[22] = tmp_cards[13];
          cards[23] = tmp_cards[16];
          cards[24] = tmp_cards[19];
          cards[25] = tmp_cards[22];
          cards[26] = tmp_cards[25];
          break;
        }
      break;
    case 2:
      switch(belongs) {
        case "top":
          cards[0] = tmp_cards[2];
          cards[1] = tmp_cards[5];
          cards[2] = tmp_cards[8];
          cards[3] = tmp_cards[11];
          cards[4] = tmp_cards[14];
          cards[5] = tmp_cards[17];
          cards[6] = tmp_cards[20];
          cards[7] = tmp_cards[23];
          cards[8] = tmp_cards[26];
          cards[9] = tmp_cards[1];
          cards[10] = tmp_cards[4];
          cards[11] = tmp_cards[7];
          cards[12] = tmp_cards[10];
          cards[13] = tmp_cards[13];
          cards[14] = tmp_cards[16];
          cards[15] = tmp_cards[19];
          cards[16] = tmp_cards[22];
          cards[17] = tmp_cards[25];
          cards[18] = tmp_cards[0];
          cards[19] = tmp_cards[3];
          cards[20] = tmp_cards[6];
          cards[21] = tmp_cards[9];
          cards[22] = tmp_cards[12];
          cards[23] = tmp_cards[15];
          cards[24] = tmp_cards[18];
          cards[25] = tmp_cards[21];
          cards[26] = tmp_cards[24];
          break;
        case "middle":
          cards[0] = tmp_cards[0];
          cards[1] = tmp_cards[3];
          cards[2] = tmp_cards[6];
          cards[3] = tmp_cards[9];
          cards[4] = tmp_cards[12];
          cards[5] = tmp_cards[15];
          cards[6] = tmp_cards[18];
          cards[7] = tmp_cards[21];
          cards[8] = tmp_cards[24];
          cards[9] = tmp_cards[2];
          cards[10] = tmp_cards[5];
          cards[11] = tmp_cards[8];
          cards[12] = tmp_cards[11];
          cards[13] = tmp_cards[14];
          cards[14] = tmp_cards[17];
          cards[15] = tmp_cards[20];
          cards[16] = tmp_cards[23];
          cards[17] = tmp_cards[26];
          cards[18] = tmp_cards[1];
          cards[19] = tmp_cards[4];
          cards[20] = tmp_cards[7];
          cards[21] = tmp_cards[10];
          cards[22] = tmp_cards[13];
          cards[23] = tmp_cards[16];
          cards[24] = tmp_cards[19];
          cards[25] = tmp_cards[22];
          cards[26] = tmp_cards[25];
          break;
        case "bottom":
          cards[0] = tmp_cards[0];
          cards[1] = tmp_cards[3];
          cards[2] = tmp_cards[6];
          cards[3] = tmp_cards[9];
          cards[4] = tmp_cards[12];
          cards[5] = tmp_cards[15];
          cards[6] = tmp_cards[18];
          cards[7] = tmp_cards[21];
          cards[8] = tmp_cards[24];
          cards[9] = tmp_cards[1];
          cards[10] = tmp_cards[4];
          cards[11] = tmp_cards[7];
          cards[12] = tmp_cards[10];
          cards[13] = tmp_cards[13];
          cards[14] = tmp_cards[16];
          cards[15] = tmp_cards[19];
          cards[16] = tmp_cards[22];
          cards[17] = tmp_cards[25];
          cards[18] = tmp_cards[2];
          cards[19] = tmp_cards[5];
          cards[20] = tmp_cards[8];
          cards[21] = tmp_cards[11];
          cards[22] = tmp_cards[14];
          cards[23] = tmp_cards[17];
          cards[24] = tmp_cards[20];
          cards[25] = tmp_cards[23];
          cards[26] = tmp_cards[26];
          break;
        }
      break;
    default:
      alert("Something went wrong. Please refresh the page.");
      break;
  }

  return cards;
}

$(document).ready(function() {
  // Step 0
  var fav_number = 1;
  var order = new Array();
  order[1] = "top";
  order[2] = "top";
  order[3] = "top";
  $('.fav_number_range').change(function() {
    fav_number = $(this).val();
    $('.fav_number').html(fav_number);
    switch (fav_number) {
      case "1":
        order[1] = "top";
        order[2] = "top";
        order[3] = "top";
        break;
      case "2":
        order[1] = "middle";
        order[2] = "top";
        order[3] = "top";
        break;
      case "3":
        order[1] = "bottom";
        order[2] = "top";
        order[3] = "top";
        break;
      case "4":
        order[1] = "top";
        order[2] = "middle";
        order[3] = "top";
        break;
      case "5":
        order[1] = "middle";
        order[2] = "middle";
        order[3] = "top";
        break;
      case "6":
        order[1] = "bottom";
        order[2] = "middle";
        order[3] = "top";
        break;
      case "7":
        order[1] = "top";
        order[2] = "bottom";
        order[3] = "top";
        break;
      case "8":
        order[1] = "middle";
        order[2] = "bottom";
        order[3] = "top";
        break;
      case "9":
        order[1] = "bottom";
        order[2] = "bottom";
        order[3] = "top";
        break;
      case "10":
        order[1] = "top";
        order[2] = "top";
        order[3] = "middle";
        break;
      case "11":
        order[1] = "middle";
        order[2] = "top";
        order[3] = "middle";
        break;
      case "12":
        order[1] = "bottom";
        order[2] = "top";
        order[3] = "middle";
        break;
      case "13":
        order[1] = "top";
        order[2] = "middle";
        order[3] = "middle";
        break;
      case "14":
        order[1] = "middle";
        order[2] = "middle";
        order[3] = "middle";
        break;
      case "15":
        order[1] = "bottom";
        order[2] = "middle";
        order[3] = "middle";
        break;
      case "16":
        order[1] = "top";
        order[2] = "bottom";
        order[3] = "middle";
        break;
      case "17":
        order[1] = "middle";
        order[2] = "bottom";
        order[3] = "middle";
        break;
      case "18":
        order[1] = "bottom";
        order[2] = "bottom";
        order[3] = "middle";
        break;
      case "19":
        order[1] = "top";
        order[2] = "top";
        order[3] = "bottom";
        break;
      case "20":
        order[1] = "middle";
        order[2] = "top";
        order[3] = "bottom";
        break;
      case "21":
        order[1] = "bottom";
        order[2] = "top";
        order[3] = "bottom";
        break;
      case "22":
        order[1] = "top";
        order[2] = "middle";
        order[3] = "bottom";
        break;
      case "23":
        order[1] = "middle";
        order[2] = "middle";
        order[3] = "bottom";
        break;
      case "24":
        order[1] = "bottom";
        order[2] = "middle";
        order[3] = "bottom";
        break;
      case "25":
        order[1] = "top";
        order[2] = "bottom";
        order[3] = "bottom";
        break;
      case "26":
        order[1] = "middle";
        order[2] = "bottom";
        order[3] = "bottom";
        break;
      case "27":
        order[1] = "bottom";
        order[2] = "bottom";
        order[3] = "bottom";
        break;
    }
  });
  $('.step-0 button').click(function() {
    $('.step-0').slideUp();
    $('.step-1').fadeIn();
    $('body').css('background-color','aquamarine');
  });
  
  // Step 1
  $('.step-1 .card').click(function() {
    $('.step-1').slideUp();
    $('.step-2').fadeIn();
    $('body').css('background-color','#333');
  });
  
  // Step 2
  var cards = new Array();
  $('.step-1 .card').each(function() {
    cards.push($(this).outerHTML());
  });
  Shuffle(cards);
  $('.step-2 .pile-1 button').after(
    cards[0] + 
    cards[3] + 
    cards[6] + 
    cards[9] + 
    cards[12] + 
    cards[15] + 
    cards[18] + 
    cards[21] + 
    cards[24]
  );
  $('.step-2 .pile-2 button').after(
    cards[1] + 
    cards[4] + 
    cards[7] + 
    cards[10] + 
    cards[13] + 
    cards[16] + 
    cards[19] + 
    cards[22] + 
    cards[25]
  );
  $('.step-2 .pile-3 button').after(
    cards[2] + 
    cards[5] + 
    cards[8] + 
    cards[11] + 
    cards[14] + 
    cards[17] + 
    cards[20] + 
    cards[23] + 
    cards[26]
  );
  $('.step-2 .pile button').click(function() {
    cards = orderCards($(this).data('pile'), cards, order[1]);

    $('.step-2').slideUp();
    $('.step-3').fadeIn();
    $('body').css('background-color','aquamarine');
    
    // Step 3
    $('.step-3 .pile-1 button').after(
      cards[0] + 
      cards[3] + 
      cards[6] + 
      cards[9] + 
      cards[12] + 
      cards[15] + 
      cards[18] + 
      cards[21] + 
      cards[24]
    );
    $('.step-3 .pile-2 button').after(
      cards[1] + 
      cards[4] + 
      cards[7] + 
      cards[10] + 
      cards[13] + 
      cards[16] + 
      cards[19] + 
      cards[22] + 
      cards[25]
    );
    $('.step-3 .pile-3 button').after(
      cards[2] + 
      cards[5] + 
      cards[8] + 
      cards[11] + 
      cards[14] + 
      cards[17] + 
      cards[20] + 
      cards[23] + 
      cards[26]
    );
    $('.step-3 .pile button').click(function() {
      cards = orderCards($(this).data('pile'), cards, order[2]);

      $('.step-3').slideUp();
      $('.step-4').fadeIn();
      $('body').css('background-color','#333');

      // Step 4
      $('.step-4 .pile-1 button').after(
        cards[0] + 
        cards[3] + 
        cards[6] + 
        cards[9] + 
        cards[12] + 
        cards[15] + 
        cards[18] + 
        cards[21] + 
        cards[24]
      );
      $('.step-4 .pile-2 button').after(
        cards[1] + 
        cards[4] + 
        cards[7] + 
        cards[10] + 
        cards[13] + 
        cards[16] + 
        cards[19] + 
        cards[22] + 
        cards[25]
      );
      $('.step-4 .pile-3 button').after(
        cards[2] + 
        cards[5] + 
        cards[8] + 
        cards[11] + 
        cards[14] + 
        cards[17] + 
        cards[20] + 
        cards[23] + 
        cards[26]
      );
      $('.step-4 .pile button').click(function() {
        cards = orderCards($(this).data('pile'), cards, order[3]);

        $('.step-4').slideUp();
        $('.step-5').fadeIn();
        $('body').css('background-color','aquamarine');
        
        //$('.your_card').html(cards[fav_number - 1]);
        // Reveal cards
        $('.your_number').html(fav_number);
        var count = 1;
        $.each(cards, function() {
          $('#final_cards').append("<div>"+count+"</div>"+this);
          count++;
        });
      });
    });
  });
});