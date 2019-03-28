import React, {Component} from 'react';
import './TodoItem.css'


class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render () {
        const { text, checked, id, onToggle, onRemove, color } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className='remove' onClick={(e) => {
                    e.stopPropagation(); // �̺�Ʈ�� Ȯ�� ���� (onRemove ���� -> onToggle ���� :: ������)
                    onRemove(id)}
                }>&times;
                </div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div style={{color: color.chip}}>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">?</div>)
                }
            </div>
        )
    }
}

export default TodoItem;

/*
* onToggle�� onRemove �� id �� �Ķ���ͷ� ������ �ش� id �� ���� �����͸� ������Ʈ�մϴ�.
* �Ķ���͸� �־���� �ϱ� ������, �� �������� �츮�� onClick={() => onToggle(id)} �� ���� �������� �ۼ��� �ߴµ���,
* onClick={onToggle{id}} �� ���� �������� �ϰ� �ʹٸ�.. ���� �ȵ˴ϴ�!!
* ����Ʈ�� �ʽ��ڰ� �ѹ� �� �� �� �ִ� �Ǽ��Դϴ�.
* �̷��� �ϸ� �ش� �Լ��� ������ �� �� ȣ���� �˴ϴ�.
* �ش� �Լ��� ȣ��Ǹ� �����Ͱ� ���� �� ���̰�, �����Ͱ� ����Ǹ� �� ���������� �ǰ���?
* �׷��� �� �� �Լ��� ȣ��ǰ�.. ���� �ݺ��Դϴ�.
* */

//Todo
// onClick={() => onToggle(id)} �� onClick={onToggle{id}} ���� �˾ƺ���!
// onClick={onToggle{id}} : ������ �� ����
// onClick={() => onToggle(id)}  : ???
// ��Ű�� �����صα�...


// `todo-text ${checked && 'checked'}` => css �� ���������� ���� (���ø� ���ͷ�) ==> �����ϱ�

