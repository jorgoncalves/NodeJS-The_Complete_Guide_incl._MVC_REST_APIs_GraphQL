const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector('[name=productId]').value;
  const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

  //irá procurar pelo "ancestral" mais proximo do btn chamado article
  const productElement = btn.closest('article');

  fetch('/admin/product/' + prodId, {
    method: 'DELETE', //caps for convenção
    headers: {
      'csrf-token': csrf
    }
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      //productElement.remove(); não funciona no IE
      productElement.parentNode.removeChild(productElement);
    })
    .catch((err) => {
      console.log(err);
    });
};
