module.exports = {
    productList: {
        query: `SELECT p.*,i.path, c.category1, c.category2, c.category3 
                FROM t_product p, t_image i, t_category c
                WHERE p.id = i.product_id AND i.type = 1 AND p.category_id = c.id`
    },
    productList2: {
        query: `select t3.*, t4.path from (select t1.*, t2.category1, t2.category2, t2.category3 
      from t_product t1, t_category t2
      where t1.category_id = t2.id) t3
      left join (select * from t_image where type=1) t4
      on t3.id = t4.product_id`
    },
    productDetail: {
        query: `SELECT p.*, i.path, c.category1, c.category2, c.category3 
                FROM t_product p, t_image i, t_category c
                WHERE p.id =? AND p.id = i.product_id AND i.type=3 AND p.category_id=c.id`
    },
    productMainImages: {
        query: `SELECT * FROM t_image WHERE product_id = ? AND TYPE=2`
    },
    productInsert: {
        query: `insert into t_product(product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, seller_id, category_id)
                VALUES (?,?,?,?,?,?,?,?,?)`
    },
    productImageInsert: {
        query: `insert into t_image (product_id, type, path) values (?,?,?)`
    },
    imageList: {
        query: `select * from t_image where product_id=?`
    },
    imageDelete: {
        query: `delete from t_image where id=?`
    },
    productDelete: {
        query: `delete from t_product where id=?`
    },
    categoryList: {
        query: `select * from t_category`
    },
    sellerList: {
        query: `select * from t_seller`
    },
    signUp: {
        query: `insert into t_user set ? on duplicate key update ?`
    }
}