(function ($) {
    "use strict";
    $(window).on('load', function() {
        setTimeout(function(){
            $('body').addClass('loaded')
        }, 1000);
    })
})(jQuery);

function addTeam(){
    const inputText = document.getElementById('name-input');
    const teamChosen = document.getElementById('team-chosen');

    let newElement = document.createElement('h3');
    newElement.innerHTML = `- ${inputText.value}`

    teamChosen.appendChild(newElement);

    inputText.value = '';

    cekTeam(teamChosen,inputText);
}

function cekTeam(teamChosen,inputText){
    const countTeams = teamChosen.childElementCount;
    const buttonConfirm = document.getElementById('confirm-team');
    const buttonConfirmMember = document.getElementById('confirm-member');
    let moreTeam = 3 - countTeams

    buttonConfirm.innerText = `Need ${moreTeam} more people`

   if(countTeams === 3){
    buttonConfirmMember.disabled = true;
     inputText.disabled = true;
     buttonConfirm.classList.toggle('not-ready');
     buttonConfirm.classList.add('ready')
     buttonConfirm.innerText = `Teams Ready`
   }
}
