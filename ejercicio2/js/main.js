const showLegal         =   document.getElementById('show-legal');
const legalText         =   document.getElementById('legal-text');
const acceptLegal       =   document.getElementById('accept-legal');
const acceptMessage     =   document.getElementById('accept-message');

const showLegalText = () => {
    showLegal.style.display = 'none';
    legalText.style.display = 'block';
    acceptLegal.style.display = 'block';
   }
   const acceptLegalText = () => {
    legalText.style.display = 'none';
    acceptLegal.style.display = 'none';
    acceptMessage.style.display = 'block';
   }

