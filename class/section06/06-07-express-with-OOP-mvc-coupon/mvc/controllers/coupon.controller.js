import { CashService } from './services/cash.service.js';

export class CouponController{

    buyCoupon = (req, res) => {
        // 1. 가진 돈 검증
        const cashService = new CashService();
        const hasMoney = cashService.checkValue();
        
        // 2. 상품권 구매
        if (hasMoney){
            res.send("상품 구매 완료");
        }
    }

}