//Main Javascript Code for button fade in

//fades in the secret document when the button is clicked
$(`#button`).on(`click`, function(event){
  $(`#secret-document`).fadeIn();
});


$(`#sale-button`).on(`click`, function(event){
  $(`#secret-info`).fadeIn();
});


//fade in buttons for men and women section

$(`#show-button`).on(`click`, function(event){
  $(`#secret-women`).fadeIn();
});

$(`#show-button`).on(`click`, function(event){
  $(`#secret-men`).fadeIn();
});

$(`#button-01`).on(`click`, function(event){
  $(`#second-box`).fadeIn();
});

$(`#button-02`).on(`click`, function(event){
  $(`#third-box`).fadeIn();
});

$(`#shop`).on(`click`, function(event){
  $(`#shop-secret`).fadeIn();
});
