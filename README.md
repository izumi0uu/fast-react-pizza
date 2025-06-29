# 代码阅读推荐顺序

## 📚 总体阅读路线图

### 🚀 第一阶段：项目入口与配置

1. [package.json](./package.json)
2. [vite.config.js](./vite.config.js)
3. [tailwind.config.js](./tailwind.config.js) \*
4. [postcss.config.js](./postcss.config.js) \*
5. [index.html](./index.html) \*
6. [src/main.jsx](./src/main.jsx) \*
7. [src/index.css](./src/index.css) \*

### 🏠 第二阶段：应用核心架构

8. [src/App.jsx](./src/App.jsx) \*
9. [src/store.js](./src/store.js) \*
10. [src/ui/AppLayout.jsx](./src/ui/AppLayout.jsx) \*
11. [src/ui/Header.jsx](./src/ui/Header.jsx) \*
12. [src/ui/Main.jsx](./src/ui/Main.jsx) \*

### 👤 第三阶段：用户功能模块

13. [src/features/user/userSlice.js](./src/features/user/userSlice.js) \*
14. [src/features/user/CreateUser.jsx](./src/features/user/CreateUser.jsx) \*
15. [src/features/user/Username.jsx](./src/features/user/Username.jsx) \*

### 🏡 第四阶段：首页与导航

16. [src/ui/Home.jsx](./src/ui/Home.jsx) \*

### 🍕 第五阶段：菜单功能模块

17. [src/services/apiRestaurant.js](./src/services/apiRestaurant.js) \*
18. [src/features/menu/menuLoader.js](./src/features/menu/menuLoader.js) \*
19. [src/features/menu/Menu.jsx](./src/features/menu/Menu.jsx) \*
20. [src/features/menu/MenuItem.jsx](./src/features/menu/MenuItem.jsx) \*

### 🛒 第六阶段：购物车功能模块

21. [src/features/cart/cartSlice.js](./src/features/cart/cartSlice.js) \*
22. [src/features/cart/Cart.jsx](./src/features/cart/Cart.jsx) \*
23. [src/features/cart/CartItem.jsx](./src/features/cart/CartItem.jsx) \*
24. [src/features/cart/CartOverview.jsx](./src/features/cart/CartOverview.jsx) \*
25. [src/features/cart/EmptyCart.jsx](./src/features/cart/EmptyCart.jsx) \*
26. [src/features/cart/UpdateItemQuantity.jsx](./src/features/cart/UpdateItemQuantity.jsx) \*
27. [src/features/cart/DeleteItem.jsx](./src/features/cart/DeleteItem.jsx) \*

### 📋 第七阶段：订单处理模块

28. [src/services/apiGeocoding.js](./src/services/apiGeocoding.js) \*
29. [src/features/order/createOrderAction.js](./src/features/order/createOrderAction.js) \*
30. [src/features/order/CreateOrder.jsx](./src/features/order/CreateOrder.jsx) \*
31. [src/features/order/orderLoader.js](./src/features/order/orderLoader.js) \*
32. [src/features/order/Order.jsx](./src/features/order/Order.jsx) \*
33. [src/features/order/OrderItem.jsx](./src/features/order/OrderItem.jsx) \*
34. [src/features/order/SearchOrder.jsx](./src/features/order/SearchOrder.jsx) \*
35. [src/features/order/UpdateOrder.jsx](./src/features/order/UpdateOrder.jsx) \*
36. [src/features/order/UpdateOrderAction.js](./src/features/order/UpdateOrderAction.js) \*

### 🎨 第八阶段：通用UI组件

37. [src/ui/Button.jsx](./src/ui/Button.jsx) \*
38. [src/ui/LinkButton.jsx](./src/ui/LinkButton.jsx) \*
39. [src/ui/Loader.jsx](./src/ui/Loader.jsx) \*
40. [src/ui/Error.jsx](./src/ui/Error.jsx) \*

### 🔧 第九阶段：工具函数

41. [src/utils/helpers.js](./src/utils/helpers.js) \*

## 🎯 阅读建议

**初学者路径**：按照1-41的顺序逐步阅读，每个阶段理解透彻后再进入下一阶段。

**有经验开发者**：可以重点关注状态管理（store.js, userSlice.js, cartSlice.js）和核心业务逻辑（订单处理、购物车管理）。

**架构学习者**：重点研究项目结构设计、组件划分原则和状态管理模式。

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
