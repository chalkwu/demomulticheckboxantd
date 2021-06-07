<template>
    <div>
        这是首页
        <a-card>
            <a-form :form="form">
                <a-form-item label="员工">
                    <a-select
                            v-decorator="['equip']"
                            :loading="selectOptionsLoading"
                            placeholder="选择装置"
                            option-filter-prop="children"
                            mode="multiple"
                            :maxTagCount="3"
                            @change="changeSelect"
                    >
                        <div slot="dropdownRender" slot-scope="menu">
                            <v-nodes :vnodes="menu" />
                            <a-divider style="margin: 4px 0;" />
                            <div style="padding: 4px 8px; cursor: pointer;" @mousedown="e => e.preventDefault()">
                                <a-button type="link" @click="selectAll">全选</a-button>
                                <a-button type="link" @click="clearAll">清空</a-button>
                            </div>
                        </div>
                        <a-select-option v-for="item in selectOptions" :value="item.mockLabel" :key="item.mockKey">
                            {{ item.mockLabel }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-card>

    </div>
</template>

<script>
    export default {
        name: "Main",
        components: {
            VNodes: {
                functional: true,
                render: (h, ctx) => ctx.props.vnodes
            }
        },
        data () {
            return {
                selectedequip: [],
                form: this.$form.createForm(this),
                selectOptions: [
                    {
                        mockKey: 1,
                        mockLabel: 'A'
                    },
                    {
                        mockKey: 2,
                        mockLabel: 'B'
                    },
                    {
                        mockKey: 3,
                        mockLabel: 'C'
                    },
                ],
                selectOptionsLoading: false
            }
        },
        mounted () {
            this.getMesDbList()
        },
        methods: {
            changeSelect (value){
              // console.log(value)
                this.selectedequip = value
                console.log(this.selectedequip)
            },
            // 获取数据源，根据实际自己改
            getMesDbList () {
                this.selectOptionsLoading = false
                // this.selectOptions = res.rows
            },
            // 全选 -- 把数据源赋给select绑定的值
            selectAll () {
                const arr = []
                const arrlb = []
                this.selectOptions.forEach(item => {
                    arr.push(item.mockKey)
                    arrlb.push(item.mockLabel)
                })
                this.form.setFieldsValue({
                    equip: arr
                })
                this.selectedequip = arrlb
                console.log(this.selectedequip)
            },
            // 清空 -- 清空select绑定的值
            clearAll () {
                this.form.setFieldsValue({
                    equip: []
                })
                this.selectedequip = []
                console.log(this.selectedequip)
            }
        }

    }
</script>

<style scoped>

</style>