# Notiva E-commerce Platform - Pages Structure

## Public Pages (No Authentication Required)

### 1. Home Page (`/`)
- Hero section with featured products
- Product categories showcase
- Popular/trending products
- Brand story section
- Newsletter signup

### 2. Product Catalog (`/products`)
- Product grid with filters
- Category filtering (Notebooks, Planners, Stickers)
- Search functionality
- Sort options (price, popularity, newest)
- Pagination

### 3. Product Detail Page (`/products/[slug]`)
- Product images gallery
- Product information (title, description, price, discount)
- Add to cart / Buy now buttons
- Product rating and reviews
- Like/unlike functionality
- Related products section

### 4. Category Pages (`/category/[slug]`)
- `/category/notebooks`
- `/category/planners`
- `/category/stickers`
- Category-specific product listings

### 5. Authentication Pages
- **Login Page** (`/login`)
- **Register Page** (`/register`)
- **Forgot Password** (`/forgot-password`)
- **Reset Password** (`/reset-password`)

### 6. Static Pages
- **About Us** (`/about`)
- **Contact** (`/contact`)
- **FAQ** (`/faq`)
- **Privacy Policy** (`/privacy-policy`)
- **Terms of Service** (`/terms`)
- **Shipping Policy** (`/shipping-policy`)
- **Return Policy** (`/return-policy`)

## User Dashboard Pages (Authentication Required)

### 7. User Account Pages
- **Profile** (`/account/profile`)
- **Order History** (`/account/orders`)
- **Order Detail** (`/account/orders/[orderId]`)
- **Wishlist** (`/account/wishlist`)
- **Address Book** (`/account/addresses`)
- **Settings** (`/account/settings`)

### 8. Shopping & Checkout Pages
- **Shopping Cart** (`/cart`)
- **Checkout** (`/checkout`)
- **Payment Success** (`/checkout/success`)
- **Payment Failed** (`/checkout/failed`)
- **Order Confirmation** (`/order/[orderId]`)

## Admin Dashboard Pages (Admin Role Required)

### 9. Admin Authentication
- **Admin Login** (`/admin/login`)

### 10. Admin Dashboard
- **Dashboard Overview** (`/admin`)
- Analytics widgets
- Quick stats (sales, orders, users)

### 11. Product Management
- **Products List** (`/admin/products`)
- **Add Product** (`/admin/products/add`)
- **Edit Product** (`/admin/products/[productId]/edit`)
- **Product Categories** (`/admin/categories`)
- **Add Category** (`/admin/categories/add`)
- **Edit Category** (`/admin/categories/[categoryId]/edit`)

### 12. Order Management
- **Orders List** (`/admin/orders`)
- **Order Detail** (`/admin/orders/[orderId]`)
- **Order Status Update** (`/admin/orders/[orderId]/edit`)

### 13. User Management
- **Users List** (`/admin/users`)
- **User Detail** (`/admin/users/[userId]`)

### 14. Marketing & Promotions
- **Promo Codes List** (`/admin/promo-codes`)
- **Add Promo Code** (`/admin/promo-codes/add`)
- **Edit Promo Code** (`/admin/promo-codes/[promoId]/edit`)

### 15. Analytics & Reports
- **Sales Reports** (`/admin/reports/sales`)
- **User Activity** (`/admin/reports/users`)
- **Product Performance** (`/admin/reports/products`)
- **Payment Methods Report** (`/admin/reports/payments`)

### 16. Content Management
- **Comments & Reviews** (`/admin/comments`)
- **Moderate Comments** (`/admin/comments/moderate`)

## API Routes Structure

### 17. Authentication APIs
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/logout`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `GET /api/auth/me`

### 18. Product APIs
- `GET /api/products` - Get all products with filters
- `GET /api/products/[slug]` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/[id]` - Update product (admin)
- `DELETE /api/products/[id]` - Delete product (admin)
- `POST /api/products/[id]/like` - Like/unlike product
- `GET /api/products/[id]/comments` - Get product comments
- `POST /api/products/[id]/comments` - Add comment

### 19. Category APIs
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (admin)
- `PUT /api/categories/[id]` - Update category (admin)
- `DELETE /api/categories/[id]` - Delete category (admin)

### 20. Cart APIs
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove` - Remove item from cart
- `DELETE /api/cart/clear` - Clear entire cart

### 21. Order APIs
- `GET /api/orders` - Get user orders
- `GET /api/orders/[id]` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/[id]/status` - Update order status (admin)
- `GET /api/admin/orders` - Get all orders (admin)

### 22. Payment APIs
- `POST /api/payments/paymob/init` - Initialize Paymob payment
- `POST /api/payments/paymob/callback` - Handle Paymob callback
- `POST /api/payments/cash-on-delivery` - Process COD order

### 23. User APIs
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/wishlist` - Get user wishlist
- `POST /api/users/wishlist/add` - Add to wishlist
- `DELETE /api/users/wishlist/remove` - Remove from wishlist
- `GET /api/admin/users` - Get all users (admin)

### 24. Promo Code APIs
- `POST /api/promo-codes/validate` - Validate promo code
- `GET /api/admin/promo-codes` - Get all promo codes (admin)
- `POST /api/admin/promo-codes` - Create promo code (admin)
- `PUT /api/admin/promo-codes/[id]` - Update promo code (admin)
- `DELETE /api/admin/promo-codes/[id]` - Delete promo code (admin)

### 25. Analytics APIs
- `GET /api/admin/analytics/sales` - Sales analytics (admin)
- `GET /api/admin/analytics/users` - User analytics (admin)
- `GET /api/admin/analytics/products` - Product analytics (admin)
- `GET /api/admin/analytics/payments` - Payment method breakdown (admin)

## Special Pages

### 26. Error Pages
- **404 Not Found** (`/404`)
- **500 Server Error** (`/500`)
- **Maintenance** (`/maintenance`)

### 27. Search & Filter Pages
- **Search Results** (`/search?q=[query]`)
- **Advanced Search** (`/search/advanced`)

## Language Support Pages
All pages above will support both Arabic and English with:
- Language switcher component
- RTL/LTR layout switching
- Localized URLs (optional):
  - `/ar/` for Arabic pages
  - `/en/` for English pages

## Total Page Count
- **Public Pages**: 15+ pages
- **User Dashboard**: 6 pages
- **Admin Dashboard**: 15+ pages
- **API Routes**: 25+ endpoints
- **Error/Special Pages**: 5 pages

**Total: 65+ pages/routes** for the complete Notiva e-commerce platform.