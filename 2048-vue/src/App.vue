<template>
  <div id='app'>
    <h1>2048</h1>
    <h4>当前总分： {{total}}</h4>
    <div class='main' @touchstart='touchstart' @touchend='touchend'>
      <div class='row' v-for='(items,index) of arr' :key='index'>
        <div
          :class='`c-${item} item`'
          v-for='(item,index) of items'
          :key='index'
        >{{item>0?item:''}}</div>
      </div>
    </div>
    <div class="message" v-show="this.messageShow">
      <div>{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      startClientX: 0,
      startClientY: 0,
      arr: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], // 初始数组
      Copyarr: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      haveGroupingArr: [[], [], [], []],
      initData: [], // 数据初始化后的数组
      haveGrouping: false, // 有可以合并的数字
      itIsLeft: false, // 是否为向左合并，默认不是向左合并
      endGap: true, // 判断最边上有没有空隙 默认有空隙
      middleGap: true, // 真 为某行中间有空隙
      haveZero: true, // 当前页面有没有 0
      total: 0, // 总分数
      message: '1351',
      messageShow: false,
      failure: false
    }
  },
  methods: {
    debounce (fn, wait) {    
      var timeout = null
      return timeout !== null ? clearTimeout(timeout) : timeout = setTimeout(fn, wait)
    },
    touchstart (e) {
      console.log('start')
      this.startClientX = e.changedTouches[0].clientX
      this.startClientY = e.changedTouches[0].clientY
    },
    touchend (e) {
      console.log('end')
      let endClientX = e.changedTouches[0].clientX
      let endClientY = e.changedTouches[0].clientY
      let x = Math.abs(this.startClientX - endClientX)
      let y = Math.abs(this.startClientY - endClientY)
      let direction = 0
      // if (this.startClientX > endClientX && x > y) {
      //   direction = 37
      // } else if (this.startClientX < endClientX && x > y) {
      //   direction = 39
      // } else if (this.startClientY > endClientY && x < y) {
      //   direction = 38
      // } else if (this.startClientY < endClientY && x < y) {
      //   direction = 40
      // }
      x > y ? this.startClientX > endClientX ? direction = 37 : direction = 39 : this.startClientY > endClientY ? direction = 38 : direction = 40
      switch (direction) {
        case 37:
          //  ←
          console.log('←')
          this.command(direction)
          break
        case 38:
          //  ↑
          console.log('↑')
          this.command(direction)
          break
        case 39:
          //  →
          this.command(direction)
          console.log('→')
          break
        case 40:
          //  ↓
          console.log('↓')
          this.command(direction)
          break
      }
    },
    command (keyCode) { // 总部
    !this.failure && this.debounce(()=>{
        this.WhetherToRotate(keyCode) // 是否需要将上下操作转换为左右操作
        this.Init() // 数据初始化 合并数字
        this.IfInvalid() // 判断是否无效
        this.Rendering(keyCode) // 渲染到页面
        this.RandomlyCreate() // 随机空白处生成数字 计算总分数 判断是否通关
      },300)
      
    },
    WhetherToRotate (keyCode) { // 是否需要将上下操作转换为左右操作
      if (keyCode === 38 || keyCode === 40) { // 38 是上 40 是下
        this.Copyarr = this.ToRotate(this.arr)
      } else if (keyCode === 37 || keyCode === 39) { // 37 是左 39 是右
        [...this.Copyarr] = this.arr
      }
      // 将当前操作做一个标识
      if (keyCode === 37 || keyCode === 38) { // 数据转换后只有左右操作
        this.itIsLeft = true
      } else if (keyCode === 39 || keyCode === 40) {
        this.itIsLeft = false
      }
    },
    Init () { // 数据初始化
      this.initData = this.DataDetails() // 非零数字详情
      this.Copyarr = this.NumberMerger() // 数字合并
    },
    IfInvalid () { // 判断是否无效
      // 判断每行中间有没有空隙
      this.MiddleGap() // 真 为某行中间有空隙
      this.EndPointGap() // 在没有中间空隙的条件下去判断最边上有没有空隙
      this.itIshuave() // 判断有没有可合并数字
    },
    Rendering (keyCode) {
      this.AddZero() // 先将占位符加上
      // 因为之前的数据都处理好了 所以只需要将上下的数据转换回去就好了
      if (keyCode === 38 || keyCode === 40) { // 38 是上 40 是下
        this.Copyarr = this.ToRotate(this.Copyarr)
      }
      console.log(`中间有空隙吗？ ${this.middleGap ? '有' : '没有'}`)
      console.log(`有可合并数字吗？ ${this.haveGrouping ? '有' : '没有'}`)
      console.log(`最边上有空隙吗？ ${this.endGap ? '有' : '没有'}`)
      this.arr = this.Copyarr
    },
    RandomlyCreate () { // 随机空白处创建新数字
      // 判断有没有可以新建的地方
      if (this.haveGrouping || this.endGap || this.middleGap) {
        let copyarr = this.Copyarr
        let zero = [] // 做一个抽奖的箱子
        let subscript = 0 // 做一个拿到的奖品号
        let number = 0 // 奖品号兑换的物品
        // 找到所有的 0 将下标添加到新的数组
        copyarr.forEach((items, index) => {
          items.forEach((item, i) => {
            if (item === 0) {
              zero.push({ x: index, y: i })
            }
          })
        })
        // 取随机数 然后在空白坐标集合中找到它
        if (zero.length) {
          subscript = Math.floor(Math.random() * zero.length)
          if (Math.floor(Math.random() * 10) % 3 === 0) {
            number = 4 // 三分之一的机会
          } else {
            number = 2 // 三分之二的机会
          }
          this.Copyarr[zero[subscript].x][zero[subscript].y] = number
        }
        this.arr = this.Copyarr
        this.total = 0
        this.Copyarr.forEach(items => {
          items.forEach(item => {
            this.total += item
            if (item === 2048) {
              this.message = '恭喜成功达成2048'
              this.messageShow = true
            }
          })
        })
      } else if (!this.haveGrouping && !this.endGap && !this.middleGap) {
        this.message = '抱歉失败了'
        this.messageShow = true
        this.failure = true
      }
    },
    DataDetails () { // 非零数字详情
      let notZero = []
      let initData = []
      this.haveZero = false
      // 找到所有非零数字
      this.Copyarr.forEach((items, index) => {
        items.forEach((item, i) => {
          if (item !== 0) {
            notZero.push({ row: index, col: i, content: item })
          }
          if (item === 0) {
            if (!this.haveZero) {
              this.haveZero = true
            }
          }
        })
      })
      // 按行进行分组
      for (let i = 0; i < this.Copyarr.length; i++) {
        initData[i] = notZero.filter(item => item.row === i)
      }
      return initData
    },
    NumberMerger () { // 数字合并
      let initData = [[], [], [], []]
      let grouping = [[], [], [], []]
      // 转化成纯数字二维数组
      this.initData.forEach((items, index) => {
        items.forEach((item, i) => {
          grouping[index][i] = item.content
        })
      })
      this.haveGroupingArr = grouping
      // 相邻且相同的数字相加
      initData = [[], [], [], []]
      if (this.itIsLeft) {
        for (let j = 0; j < grouping.length; j++) {
          let newarr = []
          let i = 0
          while (i < grouping[j].length) {
            if (grouping[j][i] === grouping[j][i + 1]) {
              newarr.push(grouping[j][i] + grouping[j][i + 1])
              i += 2
            } else {
              newarr.push(grouping[j][i])
              i++
            }
          }
          initData[j] = newarr
        }
      } else {
        for (let j = 0; j < grouping.length; j++) {
          let newarr = []
          let i = grouping[j].length - 1
          while (i >= 0) {
            if (grouping[j][i] === grouping[j][i - 1]) {
              newarr.push(grouping[j][i] + grouping[j][i - 1])
              i -= 2
            } else {
              newarr.push(grouping[j][i])
              i--
            }
          }
          initData[j] = newarr
        }
      }
      return initData
    },
    MiddleGap () { // 检查每行中间有没有空隙
      // 当所有的数都是挨着的，那么 x 下标两两相减并除以组数得到的绝对数是 1 ，比他大说明中间有空隙
      // 先将 x 下标两两相减 并添加到新的数组
      let subarr = [[], [], [], []] // 两两相减的数据
      let sumarr = [] // 处理后的最终数据
      this.initData.forEach((items, index) => {
        items.forEach((item, i) => {
          if (typeof items[i + 1] !== 'undefined') {
            subarr[index].push(item.col - items[i + 1].col)
          }
        })
      })
      // 将每一行的结果相加得到总和 然后除以每一行结果的长度
      subarr.forEach((items) => {
        sumarr.push(items.reduceRight((a, b) => a + b, 0))
      })
      sumarr = sumarr.map((item, index) => Math.abs(item / subarr[index].length))
      // 最后判断有没有比 1 大的值
      sumarr.some(item => item > 1)
      this.middleGap = sumarr.some(item => item > 1) // 真 为 有中间空隙
    },
    EndPointGap () { // 检查最边上有没有空隙
      // 判断是向左还是向右 因为左右的判断是不一样的
      this.endGap = true
      let end
      let initData = this.initData
      if (this.itIsLeft) {
        end = 0
        this.endGap = initData.some(items => items.length !== 0 ? items[0].col !== end : false)
      } else {
        end = 3
        this.endGap = initData.some(items => items.length !== 0 ? items[items.length - 1].col !== end : false)
      }
      // 取出每行的第一个数的 x 下标
      // 判断是不是最边上
      // 有不是的 说明边上 至少有一个空隙
      // 是的话说明边上没有空隙
    },
    AddZero () { // 加零
      let Copyarr = this.Copyarr
      for (let i = 0; i < Copyarr.length; i++) {
        if (!this.itIsLeft) {
          Copyarr[i].reverse()
        }
        while (Copyarr[i].length !== this.arr[0].length) {
          if (this.itIsLeft) {
            Copyarr[i].push(0)
          } else {
            Copyarr[i].unshift(0)
          }
        }
      }
      this.Copyarr = Copyarr
    },
    ToRotate (arr) { // 将数据从 x 到 y  y 到 x 相互转换
      let afterCopyingArr = [[], [], [], []]
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          afterCopyingArr[i][j] = arr[j][i]
        }
      }
      return afterCopyingArr
    },
    itIshuave () { // 判断有没有可合并的数字
      this.haveGrouping = false
      let grouping = this.haveGroupingArr
      for (let j = 0; j < grouping.length; j++) {
        let i = 0
        while (i < grouping[j].length) {
          if (grouping[j][i] === grouping[j][i + 1]) {
            i += 2
            this.haveGrouping = true
          } else {
            i++
          }
        }
      }
      grouping = this.ToRotate(grouping)
      for (let j = 0; j < grouping.length; j++) {
        let i = grouping[j].length - 1
        while (i >= 0) {
          if (grouping[j][i] === grouping[j][i - 1]) {
            i -= 2
            this.haveGrouping = true
          } else {
            i--
          }
        }
      }
    }
  },

  mounted () { // 挂载后
    this.RandomlyCreate()
    window.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          //  ←
          // console.log('←')
          this.command(e.keyCode)
          break
        case 38:
          //  ↑
          // console.log('↑')
          this.command(e.keyCode)
          break
        case 39:
          //  →
          this.command(e.keyCode)
          // console.log('→')
          break
        case 40:
          //  ↓
          // console.log('↓')
          this.command(e.keyCode)
          break
      }
    }
  }
}
</script>
<style lang='stylus'>
#app {
  display flex
  align-items center
  flex-direction column

  .main {
    cursor pointer
    user-select none
    max-width 640px
    width 100%
    background #929292
    border-radius 10px

    .row {
      overflow hidden
      display flex
      justify-content center
      width 100%
      height 0
      margin 2% 0
      padding-bottom 25%

      .item {
        display flex
        justify-content center
        align-items center
        width 25%
        height 0
        border-radius 5px
        font-size 24px
        margin 0 1%
        padding-bottom 12.5%
        padding-top 12.5%
      }

      .c-0 {
        background #bdbdbd
      }

      .c-2 {
        background #b8f349
        color #2db00c
      }

      .c-4 {
        background #54c0fe
        color #0785fe
      }

      .c-8 {
        background #fec85b
        color #ff7c22
      }

      .c-16 {
        background #fe9b57
        color #fdd29d
      }

      .c-32 {
        background #019d87
        color #80e794
      }

      .c-64 {
        background #7663fd
        color #cac6f9
      }

      .c-128 {
        background #f558c3
        color #fabea2
      }

      .c-256 {
        background #3fb7ae
        color #dbd9a8
      }

      .c-512 {
        background #e0394b
        color #f3d5b9
      }

      .c-1024 {
        background #ece573
        color #fe4e50
      }

      .c-2048 {
        background #e0ba01
        color #ffffff
      }
    }
  }
  .message {
    display flex
    justify-content center
    align-items center
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    div {
      width 320px
      height 40px
      border 1px solid #f5f5f5
      box-shadow 3px 3px 5px 1px #ccc
    }
  }
}
</style>
