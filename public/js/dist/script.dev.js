"use strict";

AOS.init({
  disable: 'mobile'
});

function resetForm() {
  document.querySelector("#addItemsForm").submit();
  document.querySelector("#addItemsForm").reset();
}

function resetBForm() {
  document.querySelector("#addBooksForm").submit();
  document.querySelector("#addBooksForm").reset();
}

function resetPForm() {
  document.querySelector("#addPicsForm").submit();
  document.querySelector("#addPicsForm").reset();
}