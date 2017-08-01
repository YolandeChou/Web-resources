
$(function(){
	Vue.component('simple-grid',{
		template:'#simple-grid',
		props:['dataList','searchKey','columns'],
		data: function(){
				return{
					mode:0,
					title:'',
					item:{}
				}
			},
		methods:{
			deleteItem:function(entry){
	            var data=this.dataList
	            data.forEach(function(item,i){
	            	if(item===entry){
	            		data.splice(i,1)
	            		return
	            	}
	            })
			},
			openNewItemDialog:function(title){
				this.title=title,
				this.mode=1,
				this.item={},
				this.$broadcast('showDialog',true)
			},
			openEditItemDialog: function(key) {
				// 根据主键查找当前修改的数据
				var currentItem = this.findItemByKey(key)
				// 对话框的标题
				this.title = 'Edit Item - ' + key
				// mode = 2表示修改模式
				this.mode = 2
				// 将选中的数据拷贝到this.item
				this.item = this.initItemForUpdate(currentItem)
				// 广播事件，传入参数true表示显示对话框
				this.$broadcast('showDialog', true)
			},
			itemExists: function(keyColumn) {
				var keyColumn = this.keyColumn
				for (var i = 0; i < this.dataList.length; i++) {
					if (this.item[keyColumn] === this.dataList[i][keyColumn])
						return true;
				}
				return false;
			},
			createItem: function() {
				var keyColumn = this.keyColumn
				if (!this.itemExists()) {
					// 将item追加到dataList
					this.dataList.push(this.item)
					// 广播事件，传入参数false表示隐藏对话框
					this.$broadcast('showDialog', false)
					// 新建完数据后，重置item对象
					this.item = {}
				} else {
					alert(keyColumn + ' "' + this.item[keyColumn] + '" is already exists')
				}

			},
			initItemForUpdate: function(p) {
			    var c = c || {};
			    for (var i in p) {
			        // 属性i是否为p对象的自有属性
			        if (p.hasOwnProperty(i)) {
			            if (typeof p[i] === 'object') {
			                c[i] = Array.isArray(p[i]) ? [] : {}
			                deepCopy(p[i], c[i])
			            } else {
			                // 属性是基础类型时，直接拷贝
			                c[i] = p[i]
			            }
			        }
			    }
			    return c;
			},
			findItemByKey: function(key){
			    var keyColumn = this.keyColumn
			    for(var i = 0; i < this.dataList.length; i++){
			        if(this.dataList[i][keyColumn] === key){
			            return this.dataList[i]
			        }
			    }
			},updateItem: function() {
			    // 获取主键列
			    var keyColumn = this.keyColumn

			    for (var i = 0; i < this.dataList.length; i++) {
			        // 根据主键查找要修改的数据，然后将this.item数据更新到this.dataList[i]
			        if (this.dataList[i][keyColumn] === this.item[keyColumn]) {
			            for (var j in this.item) {
			                this.dataList[i][j] = this.item[j]
			            }
			            break;
			        }
			    }
			    // 广播事件，传入参数false表示隐藏对话框
			    this.$broadcast('showDialog', false)
			    // 修改完数据后，重置item对象
			    this.item = {}
			}
		},
		components:{
			'model-dialog':{
				template:'#dialog-template',
				data:function(){
					return {show:false}
				},
				props:['mode','fields','title','item'],
				methods:{
					save:function(){
						if(this.mode===1){
							this.$dispatch('create-item')
						}else if(this.mode===2){
							this.$dispatch('update-item')
						}

					},
					close:function(){
                       this.show=false
					}
				},
				events:{
					'showDialog':function(show){
                       this.show=show
					}
				}
			}
		}

	})

	new Vue({
		el:'#app',
		data:{
			searchQuery:'',
			columns:[{
				name:'name',
				isKey:true
			},{
				name:'age'
			},{
				name:'sex',
				dataSource:['Male','Female']
			}],
			people: [{
				name: 'Jack',
				age: 30,
				sex: 'Male'
			}, {
				name: 'Bill',
				age: 26,
				sex: 'Male'
			}, {
				name: 'Tracy',
				age: 22,
				sex: 'Female'
			}, {
				name: 'Chris',
				age: 36,
				sex: 'Male'
			}]
		},
	})
})
