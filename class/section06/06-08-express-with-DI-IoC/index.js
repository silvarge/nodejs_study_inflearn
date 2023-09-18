import express from 'express';
import { ProductController } from './mvc/controllers/product.controller.js';
import { CouponController } from './mvc/controllers/coupon.controller.js';

import { CashService } from './mvc/services/cash.service.js';
import { PointService } from './mvc/services/point.service.js';
import { ProductService } from './mvc/services/product.service.js';

const app = express()

// 의존성 주입 (DI)                              // 의존성 주입으로 발생하는 장점
const cashService = new CashService();          // 1. new 한 번으로 모든 곳에서 재사용 (싱글톤 패턴)
const pointService = new PointService();        // 2. 의존성 주입으로 한꺼번에 변경 가능
const productService = new ProductService();    // 3. 의존성 주입으로 쿠폰 구매 방식을 포인트 결제로 안전하게 변경 가능

                                                // [부가 설명]
                                                // 1. ProductController가 CashService에 의존하고 있음. (CashService => 의존성)
                                                //    => 강하게 결합되어 있다고 표현 (강한 결합, tight-coupling)
                                                // 2. 이를 개선하기 위해 '느슨한 결합(loose-coupling)'으로 변경할 필요가 있음.
                                                //    => 이를 의존성 주입(DI)으로 해결
                                                //    => 이 역할을 대신 해주는 Nest.js 기능: IoC(Inversion-of-Control) Container (알아서 new 해서 넣어주는 기능. 즉, DI 해줌)
                                                // 3. 의존성 주입으로 싱글톤 패턴 구현 가능해짐
                                                //    => 의존성 주입이면 싱글톤 패턴인가? 그건 아니다!

// 상품 API
const productController = new ProductController(cashService, productService);
app.post('/products/buy', productController.buyProduct);        // 상품 구매하기 API
app.post('/products/refund', productController.refundProduct);  // 상품 환불하기 API

// 쿠폰(상품권) API
const couponController = new CouponController(pointService);
app.post('/coupons/buy', couponController.buyCoupon);   // 상품권을 돈주고 구매하는 API

// 게시판 API
// --

app.listen(3000)    // 포트