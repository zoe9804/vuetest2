<!--<template>-->
<!--  <div id="app">-->
<!--    <el-container style="height: 500px; border: 1px solid #eee">-->
<!--&lt;!&ndash;      el-container构建整个页面框架&ndash;&gt;-->
<!--      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
<!--&lt;!&ndash;        el-aside构建左侧菜单&ndash;&gt;-->
<!--        <el-menu :default-openeds="['1', '3']">-->
<!--&lt;!&ndash;          el-menu构建左侧菜单内容&ndash;&gt;-->
<!--&lt;!&ndash;            default-openeds默认展开的菜单，通过菜单的index值来关联&ndash;&gt;-->
<!--&lt;!&ndash;            default-active默认选中的菜单，通过菜单的index值来关联&ndash;&gt;-->
<!--          <el-submenu index="1">-->
<!--&lt;!&ndash;           el-submenu可展开的菜单&ndash;&gt;-->
<!--&lt;!&ndash;              index菜单的下标，文本类型，不能是数值类型&ndash;&gt;-->
<!--            <template slot="title"><i class="el-icon-message"></i>导航一</template>-->
<!--&lt;!&ndash;            template对应el-submenu的菜单名&ndash;&gt;-->
<!--&lt;!&ndash;              i设置菜单图标，通过class属性实现&ndash;&gt;-->
<!--&lt;!&ndash;                el-icon-message&ndash;&gt;-->
<!--&lt;!&ndash;                el-icon-menu&ndash;&gt;-->
<!--&lt;!&ndash;                el-icon-setting&ndash;&gt;-->
<!--            <el-menu-item-group>-->
<!--&lt;!&ndash;              el-menu-item-group设置分组&ndash;&gt;-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--&lt;!&ndash;              el-menu-item设置菜单子节点，不可再展开的子节点&ndash;&gt;-->
<!--&lt;!&ndash;                index&ndash;&gt;-->
<!--              <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group title="分组2">-->
<!--              <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-submenu index="1-4">-->
<!--              <template slot="title">选项4</template>-->
<!--              <el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
<!--            </el-submenu>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="2">-->
<!--            <template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group title="分组2">-->
<!--              <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-submenu index="2-4">-->
<!--              <template slot="title">选项4</template>-->
<!--              <el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
<!--            </el-submenu>-->
<!--          </el-submenu>-->
<!--&lt;!&ndash;          <el-submenu index="3">&ndash;&gt;-->
<!--&lt;!&ndash;            <template slot="title"><i class="el-icon-setting"></i>导航三</template>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;              <template slot="title">分组一</template>&ndash;&gt;-->
<!--&lt;!&ndash;              <el-menu-item index="3-1">选项1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;              <el-menu-item index="3-2">选项2</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-menu-item-group title="分组2">&ndash;&gt;-->
<!--&lt;!&ndash;              <el-menu-item index="3-3">选项3</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-menu-item-group>&ndash;&gt;-->
<!--&lt;!&ndash;            <el-submenu index="3-4">&ndash;&gt;-->
<!--&lt;!&ndash;              <template slot="title">选项4</template>&ndash;&gt;-->
<!--&lt;!&ndash;              <el-menu-item index="3-4-1">选项4-1</el-menu-item>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-submenu>&ndash;&gt;-->
<!--&lt;!&ndash;          </el-submenu>&ndash;&gt;-->
<!--        </el-menu>-->
<!--      </el-aside>-->

<!--      <el-container>-->
<!--        <el-header style="text-align: right; font-size: 12px">-->
<!--          <el-dropdown>-->
<!--            <i class="el-icon-setting" style="margin-right: 15px"></i>-->
<!--            <el-dropdown-menu slot="dropdown">-->
<!--              <el-dropdown-item>查看</el-dropdown-item>-->
<!--              <el-dropdown-item>新增</el-dropdown-item>-->
<!--              <el-dropdown-item>删除</el-dropdown-item>-->
<!--            </el-dropdown-menu>-->
<!--          </el-dropdown>-->
<!--          <span>王小虎</span>-->
<!--        </el-header>-->

<!--        <el-main>-->
<!--            <router-view></router-view>-->
<!--        </el-main>-->
<!--      </el-container>-->
<!--    </el-container>-->
<!--  </div>-->
<!--</template>-->

<!--<style>-->
<!--  .el-header {-->
<!--    background-color: #B3C0D1;-->
<!--    color: #333;-->
<!--    line-height: 60px;-->
<!--  }-->

<!--  .el-aside {-->
<!--    color: #333;-->
<!--  }-->
<!--</style>-->

<!--<script>-->
<!--  export default {-->
<!--    data() {-->
<!--      const item = {-->
<!--        date: '2016-05-02',-->
<!--        name: '王小虎',-->
<!--        address: '上海市普陀区金沙江路 1518 弄'-->
<!--      };-->
<!--      return {-->
<!--        tableData: Array(20).fill(item)-->
<!--      }-->
<!--    }-->
<!--  };-->
<!--</script>-->
