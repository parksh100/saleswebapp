module.exports = {
    productList: {
        query: `SELECT t1.*, t2.path, t3.category1, t3.category2, t3.category3
                FROM t_product t1, t_image t2, t_category t3
                WHERE t1.id = t2.product_id AND t2.type=1 AND t1.category_id=t3.id`
    },
    sellerList: {
        query: `select * from t_seller`
    },
    productDetail: {
        query: `SELECT t1.*, t2.path, t3.category1, t3.category2, t3.category3
                FROM t_product t1, t_image t2, t_category t3
                WHERE t1.id = ? AND t1.id = t2.product_id AND t2.type = 3 AND t1.category_id = t3.id`
    },
    productMainImages: {
        query: `SELECT * FROM t_image WHERE product_id= ? AND TYPE = 2`
    },
    productInsert: {
        query: `insert into t_product (product_name, product_price, delivery_price, add_deliver_price,tags, outbound_days, seller_id, category_id )
         values(?,?,?,?,?,?,?,?)`
    },
    productImageInsert: {
        query: `insert into t_image (product_id, type, path)
        values(?,?,?)`
    }

}