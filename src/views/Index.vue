<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu router :default-openeds="['0','1']">
                <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">
                    <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
                    <el-menu-item v-for="item2 in item.children" :index="item2.path"
                    :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
<!--menu与router的绑定-->
<!--    element-menu标签添加router属性
        在页面中添加router-view这个标签，这是一个容器，可以动态渲染所选择的router
        给el-menu-item标签的index值就是要跳转的router-->
