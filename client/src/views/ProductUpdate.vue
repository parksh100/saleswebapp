<template>
  <div>
    <div class="container">
      <h2 class="text-center mt-3 mb-3">제품수정</h2>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품명</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="productDetail.product_name"
          >
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품가격</label>
        <div class="col-sm-9">
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              v-model="productDetail.product_price"
            >
            <span class="input-group-text">원</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">배송비</label>
        <div class="col-sm-9">
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              v-model="productDetail.delivery_price"
            >
            <span class="input-group-text">원</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">추가배송비</label>
        <div class="col-sm-9">
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              v-model="productDetail.add_delivery_price"
            >
            <span class="input-group-text">원</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품카테고리</label>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-auto">
              <select class="form-select">
                <option value="">전자제품</option>
              </select>
            </div>
            <div class="col-auto">
              <select class="form-select">
                <option value="">컴퓨터</option>
              </select>
            </div>
            <div class="col-auto">
              <select class="form-select">
                <option value="">악세사리</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">태그</label>
        <div class="col-sm-9">
          <input
            type="text"
            class="form-control"
            v-model="productDetail.tags"
          >
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">출고일</label>
        <div class="col-sm-9">
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              v-model="productDetail.outbound_days"
            >
            <span class="input-group-text">일 이내 출고</span>
          </div>
        </div>
      </div>

      <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
          <button
            type="button"
            class="btn btn-lg btn-dark"
            @click="goToList()"
          >취소</button>
        </div>
        <div class="col-6 d-grid p-1">
          <button
            type="button"
            class="btn btn-lg btn-danger"
          >저장</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productId: 0,
      productDetail: {},
    };
  }
  ,
  created () {
    this.productId = this.$route.query.product_id;
    this.getProductDetail();

  },
  methods: {
    goToList () {
      this.$router.push({ path: '/sales' });
    },
    async getProductDetail () {
      let productDetail = await this.$api('/api/productDetail', { param: [this.productId] });
      if (productDetail.length > 0) {
        this.productDetail = productDetail[0];
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user;
    }
  },
  mounted () {
    if (this.user.email == undefined) {
      alert('로그인 해야 이용할 수 있습니다');
      this.$router.push({ path: '/' })
    }
  },



}
</script>