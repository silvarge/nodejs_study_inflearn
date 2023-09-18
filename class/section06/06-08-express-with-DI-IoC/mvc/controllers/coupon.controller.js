export class CouponController{

    pointService;

    constructor(pointService){
        this.pointService = pointService;
    }

    buyCoupon = (req, res) => {
        // 1. 가진 돈 검증
        const hasMoney = this.pointService.checkValue();
        
        // 2. 상품권 구매
        if (hasMoney){
            res.send("상품 구매 완료");
        }
    }

}