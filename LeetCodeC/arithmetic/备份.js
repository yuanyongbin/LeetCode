import React, { PureComponent } from 'react';
import { Button, Icon } from 'antd';
import Input from 'antd/es/input/Input';
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './personal.less';
import RenderAuthorized from '@/components/Authorized';
import { getAuthority } from '@/utils/authority';
import logo from '../../assets/logo.png';
import u90 from '@/assets/u90.png'
import u761 from  '@/assets/u761.png'
import u887 from  '@/assets/u887.png'
import u940 from  '@/assets/u940.png'
import Link from 'umi/link';

const Authority = getAuthority();
const Authorized = RenderAuthorized(Authority);

export default class Personal extends PureComponent {


    render() {
        return (
            <div>
                <div className={ styles.header }>
                    <div className={ styles.box }>
                        <div className={ styles.logo }>
                            <a><img src={logo} /></a>
                        </div>
                        <div className={ styles.menu }>
                            <ul>
                                <li><Link to="/home">首页</Link></li>
                                <li>公司简介</li>
                                <li>规章制度</li>
                                <li>知识库</li>
                                <li>网站地图</li>
                            </ul>
                        </div>
                        <div className={ styles.search }>
                            <input placeholder="搜索内容" />
                                <img src={u90}/>
                        </div>
                    </div>
                </div>

                <div className={ styles.mainBox }>
                    <div className={ styles.leftBox }>
                        <div className={ styles.headBox }>
                            <div className={ styles.headImg }>
                            </div>
                            <div className={ styles.name }>
                                <p>王一一</p>
                            </div>
                        </div>
                        <div className={ styles.divider }></div>
                        <div className={ styles.meeting}>
                            <p className={ styles.title }>本周会议</p>
                            <ul className={ styles.itemBox }>
                                <li className={ styles.item }>周二（10月21日）  会议一</li>
                                <li className={ styles.item }>周四（10月23日）  会议一</li>
                            </ul>
                        </div>
                        <div className={ styles.birthday }>
                            <div className={ styles.cake }>
                                <img src={u940} />
                                    <span>张三，生日快乐！</span>
                            </div>
                            <div className={ styles.goWish }>送去生日祝福</div>
                        </div>
                    </div>
                    <div className={ styles.rightBox }>
                        <div className={ styles.bodyBox }>
                            <div className={ styles.top }>
                                <span className={ styles.screen }>筛选</span>
                                <div className={ styles.navTop }>
                                    <ul>
                                        <li>
                                            销售部
                                            <img src={u887} />
                                        </li>
                                        <li>统筹部</li>
                                        <li>财务部</li>
                                        <li>人力部</li>
                                        <li>行政部</li>
                                    </ul>
                                </div>
                                <div className={ styles.search }>
                                    <input placeholder="搜索内容" />
                                        <img src={u90} />
                                </div>
                            </div>
                            <div className={ styles.items }>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div className={ styles.item }>
                                    <div className={ styles.head }>
                                        <img src={u761} />
                                    </div>
                                    <div className={ styles.msg }>
                                        <p>王一一</p>
                                        <p>联系电话：<span>134 5678 9756</span></p>
                                    </div>
                                    <div className={ styles.section }>
                                        <span>销售部</span>
                                    </div>
                                </div>
                                <div style={{clear: 'both'}}></div>
                            </div>
                            <div className={ styles.paging }>
                                <span>上一页</span>
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>下一页</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles['foot-box']}>
                        <div className={styles.left}>联系我们：北京市朝阳区一一街坊20号楼 010-872222</div>
                        <div className={styles.right}>备案序号:京ICP备05008360号 京公网安备110401400205号</div>
                    </div>
                </div>
            </div>
        );
    }
}
