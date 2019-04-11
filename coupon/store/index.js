export const state = () => {
  return {
    detailsShow: false,
    coupon: ''
  }
}

export const mutations = {
  setDetailsShow(state, show) {
    state.detailsShow = show
  },
  setCoupon(state, coupon) {
    state.coupon = coupon
  }
}

export const actions = {
  setDetailsShow(context, show) {
    context.commit('setDetailsShow', show)
  },
  setCoupon(context, coupon) {
    context.commit('setCoupon', coupon)
  }
}
