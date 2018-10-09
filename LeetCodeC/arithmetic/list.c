//MSCompiler Driver By QStudio - Start
//TODO:���������Ԥ�������

//MSCompiler Driver By QStudio - End
//�鿴Ԥ�������ʹ�÷������� �˵�->���� [B]->������� [H]

#include <stdio.h>
#include <malloc.h>

// �ڵ����ݽṹ
typedef struct listNode{
	int val;
	struct listNode* next;
}node;

//   ��������
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



//�����ڵ�
node* create(int val){
	node* p = (node *)malloc(sizeof(node));
	p->val = val;
	p->next = NULL;
	return p;
}
// ��ʼ��һ���ڵ�
node* initList (){
	node* head = (node *)malloc(sizeof(node));
	head->val = 0;
	head->next = NULL;
	return head;
}

// ��������
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
// ��ӽڵ�
/**
 * ������ �������ָ��λ�����һ������
 * ������
 * 	p������
 * 	index�� ����λ��(-1�������ӽڵ㣬0����ͷ��ӽڵ�(��0��ʼ����)��>0��ָ��λ�ã�����Ϊ��Чֵ)
 * 	val�� �����ֵ
 *
 * */
int addNode(node* p, int index, int val){
	if(p == NULL || index < -1){ // �жϲ����Ƿ����
		return -1;
	}
	node* newNode = create(val);
	node* head = p;
	if(index == -1) { // ������ĩβ����ڵ�
		while (head->next != NULL) {
			head = head->next;
		}
		head->next = newNode;
		return 0;
	}

	// ������ĩβ����ڵ�
	if (index != -1) {
		int count = 0; // ��ʱ����������¼����ĵ�ǰλ��
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
 *	������ ɾ���ڵ�
 *	������
 *		p������ڵ�
 *		index��ɾ���ڵ�λ�ã�-1��ɾ��β�ڵ㣬0ͷ�ڵ㣬>0:�м�ڵ㣩
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
 * ������ ����ת
 * ������
 * 	p������
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
 * �������жϻ����ַ���
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
