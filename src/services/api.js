export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, idQuery) {
  const requestCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${idQuery}`);
  const requestCatJson = await requestCategory.json();
  return requestCatJson;
}

export async function getProductsFromCategory(categoryId) {
  const requestCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const requestCatJson = await requestCategory.json();
  return requestCatJson;
}
