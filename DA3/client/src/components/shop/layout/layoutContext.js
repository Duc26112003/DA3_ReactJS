// Định nghĩa trạng thái ban đầu cho layout
export const layoutState = {
  navberHamburger: false,          // Trạng thái hiển thị/hide của menu hamburger
  loginSignupModal: false,         // Trạng thái hiển thị/hide của modal đăng nhập/đăng ký
  loginSignupError: false,         // Trạng thái lỗi khi đăng nhập/đăng ký
  cartModal: false,                // Trạng thái hiển thị/hide của modal giỏ hàng
  cartProduct: null,               // Thông tin sản phẩm trong giỏ hàng
  singleProductDetail: null,       // Chi tiết sản phẩm đơn lẻ
  inCart: null,                    // Sản phẩm hiện có trong giỏ hàng
  cartTotalCost: null,             // Tổng chi phí của các sản phẩm trong giỏ hàng
  orderSuccess: false,             // Trạng thái đơn hàng thành công
  loading: false,                  // Trạng thái tải dữ liệu
};

// Định nghĩa reducer để cập nhật trạng thái dựa trên các hành động
export const layoutReducer = (state, action) => {
  switch (action.type) {
    // Toggle trạng thái hiển thị của menu hamburger
    case "hamburgerToggle":
      return {
        ...state,
        navberHamburger: action.payload,
      };
    // Toggle trạng thái hiển thị của modal đăng nhập/đăng ký
    case "loginSignupModalToggle":
      return {
        ...state,
        loginSignupModal: action.payload,
      };
    // Toggle trạng thái hiển thị của modal giỏ hàng
    case "cartModalToggle":
      return {
        ...state,
        cartModal: action.payload,
      };
    // Cập nhật thông tin sản phẩm trong giỏ hàng
    case "cartProduct":
      return {
        ...state,
        cartProduct: action.payload,
      };
    // Cập nhật chi tiết sản phẩm đơn lẻ
    case "singleProductDetail":
      return {
        ...state,
        singleProductDetail: action.payload,
      };
    // Cập nhật sản phẩm trong giỏ hàng
    case "inCart":
      return {
        ...state,
        inCart: action.payload,
      };
    // Cập nhật tổng chi phí của các sản phẩm trong giỏ hàng
    case "cartTotalCost":
      return {
        ...state,
        cartTotalCost: action.payload,
      };
    // Cập nhật trạng thái lỗi khi đăng nhập/đăng ký
    case "loginSignupError":
      return {
        ...state,
        loginSignupError: action.payload,
      };
    // Cập nhật trạng thái đơn hàng thành công
    case "orderSuccess":
      return {
        ...state,
        orderSuccess: action.payload,
      };
    // Cập nhật trạng thái tải dữ liệu
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    // Trả về trạng thái hiện tại nếu action không khớp
    default:
      return state;
  }
};
