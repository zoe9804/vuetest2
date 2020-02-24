<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="deliver_id"
                    label="编号"
                    width="200%">
            </el-table-column>
            <el-table-column
                    prop="deliver_name"
                    label="姓名"
                    width="240">
            </el-table-column>
            <el-table-column
                    prop="deliver_phone"
                    label="电话"
                    width="260">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="140">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
            page(currentPage) {
                const _this = this
                axios.get('http://localhost:8181/deliver/findAll/' + (currentPage - 1) + '/3').then(function (resp) {
                    console.log(resp)
                    _this.tableData = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                })
            },
        },
        data() {
            return {
                pageSize: 3,
                total: 0,
                tableData: [{
                    deliver_id: '2016-05-02',
                    deliver_name: '王小虎1',
                    deliver_phone: '上海',
                }, {
                    deliver_id: '2016-05-02',
                    deliver_name: '王小虎2',
                    deliver_phone: '上海',
                }, {
                    deliver_id: '2016-05-02',
                    deliver_name: '王小虎3',
                    deliver_phone: '上海',
                },]
            }
        },
        created(){
                const _this = this
                axios.get('http://localhost:8181/deliver/findAll/0/3').then(function (resp) {
                    console.log(resp)
                    _this.tableData = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                })
        }

    }
</script>
