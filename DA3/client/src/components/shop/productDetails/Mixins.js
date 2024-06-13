
export const cartList = () => {
  let carts = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null; // Lấy dữ liệu giỏ hàng từ localStorage và chuyển đổi từ JSON sang đối tượng JavaScript. Nếu không có dữ liệu, đặt giá trị carts là null.
  let list = []; // Khởi tạo một mảng rỗng để chứa danh sách ID sản phẩm.
  if (carts !== null) { // Kiểm tra nếu carts không phải là null (tức là có dữ liệu trong giỏ hàng).
    for (let cart of carts) { // Duyệt qua từng sản phẩm trong giỏ hàng.
      list.push(cart.id); // Thêm ID của sản phẩm vào danh sách list.
    }
    return list; // Trả về danh sách các ID sản phẩm.
  } else {
    return (list = null); // Nếu giỏ hàng trống (null), đặt list là null và trả về.
  }
};


export const updateQuantity = (
  type,
  totalQuantitiy,
  quantitiy,
  setQuantitiy,
  setAlertq
) => {
  if (type === "increase") {
    if (quantitiy === totalQuantitiy) {
      setAlertq(true);
    } else {
      setQuantitiy(quantitiy + 1);
    }
  } else if (type === "decrease") {
    if (quantitiy === 1) {
      setQuantitiy(1);
      setAlertq(false);
    } else {
      setQuantitiy(quantitiy - 1);
    }
  }
};

export const slideImage = (type, active, count, setCount, pImages) => {
  if (active === count) {
    return true;
  }
  if (type === "increase") {
    if (count === pImages.length - 1) {
      setCount(0);
    } else if (count < pImages.length) {
      setCount(count + 1);
    }
  }
};

export const inCart = (id) => { // Định nghĩa và xuất hàm inCart với tham số id
  if (localStorage.getItem("cart")) { // Kiểm tra nếu có dữ liệu "cart" trong localStorage
    let cartProducts = JSON.parse(localStorage.getItem("cart")); // Lấy dữ liệu giỏ hàng từ localStorage và chuyển đổi từ JSON sang đối tượng JavaScript
    for (let product of cartProducts) { // Duyệt qua từng sản phẩm trong giỏ hàng
      if (product.id === id) { // Kiểm tra nếu ID của sản phẩm trùng với ID được truyền vào
        return true; // Nếu trùng, trả về true (sản phẩm có trong giỏ hàng)
      }
    }
  }
  return false; // Nếu không tìm thấy sản phẩm trong giỏ hàng, trả về false
};


export const addToCart = (
  id,
  quantitiy,
  price,
  layoutDispatch,
  setQuantitiy,
  setAlertq,
  fetchData,
  totalCost
) => {
  let isObj = false;
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  if (cart.length > 0) {
    cart.forEach((item) => {
      if (item.id === id) {
        isObj = true;
      }
    });
    if (!isObj) {
      cart.push({ id, quantitiy, price });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  } else {
    cart.push({ id, quantitiy, price });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  layoutDispatch({ type: "inCart", payload: cartList() }); //Cập nhật trạng thái "inCart" với danh sách giỏ hàng mới
  layoutDispatch({ type: "cartTotalCost", payload: totalCost() });  // Cập nhật tổng chi phí giỏ hàng
  setQuantitiy(1);
  setAlertq(false);
  fetchData();
};
