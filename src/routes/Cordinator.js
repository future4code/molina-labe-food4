export const goToHome = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignup = (history) => {
  history.push("/cadastro");
};

export const goToAddress = (history) => {
  history.push("/cadastro-endereco");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToRestaurant = (history, id) => {
  history.push(`/restaurantes/${id}`);
};

export const goToProfile = (history) => {
  history.push("/perfil");
};

export const goToEditAddress = (history) => {
  history.push("/editar-endereco");
};

export const goToEditUser = (history) => {
  history.push("/editar-usuario");
};

export const goToCart = (history) => {
  history.push("/carrinho");
};
