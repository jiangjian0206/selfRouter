<template>
  <div class="cl-checklist">
    <div class="topbar">
      <div class="cancel">取消</div>
      <div class="title">选择考场</div>
      <div class="confirm">确定</div>
    </div>
    <div class="desc">您已选中0个，最多可选3个</div>
    <div class="list">
      <label for="2" class="line border-1px">
        <div class="l">
          <div class="title">科目二第07考点马路</div>
          <div class="address">上海市宝山区保安公路2009号</div>
        </div>
        <div class="r"></div>
      </label>
      <div class="line selected">
        <div class="l">
          <div class="title">科目二第07考点马路</div>
          <div class="address">上海市宝山区保安公路2009号</div>
        </div>
        <div class="r"></div>
      </div>
       <div class="line selected">
        <div class="l">
          <div class="title">科目二第07考点马路</div>
          <div class="address">上海市宝山区保安公路2009号</div>
        </div>
        <div class="r"></div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.topbar {
  height: 30px;
  background-color: #d0000e;
}
.desc {
  height: 30px;
  line-height: 30px;
  padding-right: 10px;
  font-size: 14px;
  text-align: right;
  color: rgb(159, 159, 159);
}
.list {
  height: 300px;
  background-color: #fff;
}

.topbar {
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  font-size: 16px;
  padding: 0 13px;
  border-bottom: 1px solid rgb(217, 217, 217);
  background-color: #fff;
}
.topbar .cancel {
  color: rgb(159, 159, 159);
}
.topbar .confirm {
  color: rgb(46, 166, 242);
}
.list{
    height: 300px;
    font-size: 14px;
    padding: 10px 13px;
    background-color: #fff;
  }
.list .line {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #fff;
  }
.list .line .l{
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    background-color: #fff;
  }
.list .line .r{
    width: 20px;
    height: 20px;
    background-color: #0d2e44;
}
.list .line .r{
    width: 20px;
    height: 20px;
    margin: 0 5px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    border:1px solid #9e9e9e;
    background-color: #fff;
    position: relative;
    z-index: 0;
  }
 .list .line.selected .l .title{
    color: #1799fa;
  }
  .list .line.selected .r{
    border: 1px solid #1799fa;
    background-color: #1799fa;
  }
  .list .line.selected .r::before{
    content: ' ';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAPCAYAAAALWoRrAAAA90lEQVQ4ja3TMSuFURgH8GeQRGIwy6BkUbIYlHwBu0Umi8VkMVlMJoMvIcNdDAYlJuULWCSESBSLwc9we/P2eu715t6nznKe//Or0zknEF1YS3jAHRa7Aa7iy0/ddAquVUC47ARcT8APLPwX3PC73jGPCPRiGSvoqwFuJuAb5opMoFFqnmCwDbiVgK+YLecCn5XQGYYScDsBXzBTzQb2k/A5hkvBnSTzhOnsRIEBHCdDFxjBbtJ7xFQGFmigH0fJ8HOyd4/JVmAZDc2bP0yQct1ioh1YRYvn1cg0XGP8LzBDC/igAl5hrA7YCg30YE/zl5xitC6I+AYJmBaJbbKurAAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    z-index: 1;
}
.list .line .l .address{
    color: rgb(159,159,159);
    position: relative;
    padding-left: 15px;
  }
  .list .line .l .address::before{
    content: ' ';
    display: inline-block;
    position: absolute;
    width: 15px;
    height: 15px;
    top: 2px;
    left: 0;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAABu0lEQVRIiaXUzU8TQRjH8U9fpAkXIZqItHghxEgietuD/gP84R420QSDcCDxIq6KaCoJYCuaeJhdu93OlILfpEnnmWd++7zMM63d3V0RuljHQ9xFr7SP8QNfUOBPlmUzB5tsYBtLkb0eHpS/JzjEcd2hs7W1Vf1v4TkeoxMLu0EHa0VRLBdFcTIYDEC75vCsjO6mbGCnWlSCg1uKVTzK83xAqGFHqFmMX3iP7+X6HjbF67ud5/nnLvomXaxziVcY1WxDfMQLLDf8e+i3sZaIbq8hVjHC28SZtTZWIhs/TdKM8S3xsZW2eLrjOWIVMcFeO2Ik1Kc1R6xltoYI1+Y8Yl8Sxi7Funinz9s4SRzaEa/vKp4mzpx0hSHfjGzewUt8EpoA98voUuUoujgT7tdqxKEl3NN+QqDOMMuys6opRwscuI4jJrP8VYjytgxLjanX5uA/BA+qh7YuOBQadFOKLMv+Zde82Ae4uoHYlUZmTcGx8KwvymGWZVNjGhu9DzhdQOy09J0iNct75qd+VfrMkBIcYX+O4L74a5MUJHT8OGI/Nuc2zBOEd7iorS9KW5LrBH/jjZDeCK9LW5K/QatiGcsSFOsAAAAASUVORK5CYII=");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0;
}
.cl-checklist{
    overflow: hidden;
}
.list{
    /*height: 300px;*/
    max-height: 300px;
    font-size: 14px;
    padding: 10px 13px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; 
    overflow-scrolling: touch;
    /*background-color: #00A2E6;*/
}
</style>
