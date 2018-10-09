//MSCompiler Driver By QStudio - Start
//TODO:在这里添加预编译参数

//MSCompiler Driver By QStudio - End
//查看预编译参数使用方法请点击 菜单->构建 [B]->编译帮助 [H]

#include <stdio.h>
#include <malloc.h>

// 节点数据结构
typedef struct listNode{
	int val;
	struct listNode* next;
}node;

//   函数声明
node* create(int val);
node* initList ();
void printfList (node* list);
int addNode(node* p, int index, int val);
int deleteNode (node* p, int index);
void reversalList(node* p);
int palindromeList(node* p);

int main(int argc, char *argv[])
{
	node* head = initList();
	head->next = create(1);
	addNode (head,-1,2);
	addNode (head,-1,3);
	addNode (head,-1,3);
	addNode (head,-1,2);
	addNode (head,-1,1);
	//addNode (head, 3, 100);
	//int a = deleteNode(head, -1);
	//deleteNode(head, 3);
	//reversalList(head);
	int a = palindromeList(head);
	printfList(head);

	printf("cesi:  %d \n", a);
}



//创建节点
node* create(int val){
	node* p = (node *)malloc(sizeof(node));
	p->val = val;
	p->next = NULL;
	return p;
}
// 初始化一个节点
node* initList (){
	node* head = (node *)malloc(sizeof(node));
	head->val = 0;
	head->next = NULL;
	return head;
}

// 遍历链表
void printfList (node* list){
	if(list == NULL && list->next == NULL){
		return;
	}
	node* head = list->next;
	while (head!= NULL){
		printf("%d, " , head->val);
		head = head->next;
	}
	printf("\n" );
}
// 添加节点
/**
 * 描述： 向链表的指定位置添加一个几点
 * 参数：
 * 	p：链表
 * 	index： 插入位置(-1：最后添加节点，0：开头添加节点(从0开始计数)，>0：指定位置，必须为有效值)
 * 	val： 插入的值
 *
 * */
int addNode(node* p, int index, int val){
	if(p == NULL || index < -1){ // 判断参数是否合理
		return -1;
	}
	node* newNode = create(val);
	node* head = p;
	if(index == -1) { // 在链表末尾插入节点
		while (head->next != NULL) {
			head = head->next;
		}
		head->next = newNode;
		return 0;
	}

	// 非链表末尾插入节点
	if (index != -1) {
		int count = 0; // 计时器：用来记录链表的当前位置
		while ( head->next != NULL) {
			count++;
			if(index == count) {
				newNode->next = head->next;
				head->next = newNode; 
				return 0;
			}
			head = head->next;
		}
	}
	return -1;
}


/**
 *	描述： 删除节点
 *	参数：
 *		p：链表节点
 *		index：删除节点位置（-1：删除尾节点，0头节点，>0:中间节点）
 *
 * */
int deleteNode (node* p, int index) {
	if(p == NULL || index < -1) {
		return -1;
	}
	node *head = p;
	if(index == -1) {
		while (head->next->next != NULL ){
//			if(head->next->next == NULL) {
//				free(head->next);
//				head->next = NULL;
//				return 0;
//			}
			head = head->next;
		}
		if(head->next->next == NULL) {
			free(head->next);
			head->next = NULL;
			return 0;
		}
		
	}
	if(index != -1) {
		int count = 0;
		while (head->next->next != NULL) {
			count++;
			if(count == index) {
				node* del = head->next;
				head->next = head->next->next;
				free(del);
				return 0;
			}
			head = head->next;
		}
	}
	return -1;
}

/**
 * 描述： 链表反转
 * 参数：
 * 	p：链表
 * */
void reversalList(node* p){
	node* head = p;
	node* now = p->next;
	node* pre = p->next;
	while (now != NULL){
		node* nowNext = now->next;
		if(now == head->next) {
			now->next = NULL;
		}else {
			head->next = now;
			now->next = pre;
		}
		pre = now;
		now = nowNext;
	}
}

/**
 * 描述：判断回文字符串
 *
 * */
int palindromeList(node* p){

	if(p == NULL) {
		return 0;
	}
	node* middle = p->next;
	node* head = p->next;
	node* end = p->next;
	while (end != NULL){
		if(end->next != NULL && end->next->next == NULL){
			break;
		}
		if(end->next){
			break;
		}
		end = end->next->next;
		middle = middle->next;
	}
	reversalList(middle);
	while(middle != NULL && head != NULL){
		if(middle->val != head->val){
			return 0;
		}
		middle = middle->next;
		head = head->next;
	}
	return 1;
}
