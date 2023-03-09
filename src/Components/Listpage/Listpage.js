import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Managedlist from './Managedlist';
import Participatinglist from './Participatinglist';
import Modal from 'react-modal';
import ProjectListModalAdd from '../ListPageModals/ProjectListModalAdd';
import '../ListPageModals/ProjectListModal.css';
import '../../Styles/Cards.css';
import ProjectListModalJoin from '../ListPageModals/ProjectListModalJoin';

function Listpage(props) {
  let data = [
    // 생성된 프로젝트 데이터
    {
      id: 99, // 페이지 이동을 위한 프로젝트 고유 ID
      projectName: 'test1', // 프로젝트 이름
      content: 'test1', // 프로젝트 내용
      deadline: '2023-12-31', // 마감일
      management: 1, // 유저가 생성한 페이지면 1 , 아니면 0
      join: 1, // 유저가 참여중인 페이지면 1 , 아니면 0
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false); // 프로젝트 추가 모달 State
  const [modalIsOpen1, setModalIsOpen1] = useState(false); // 프로젝트 참여 모달 State

  let [list, setList] = useState(data); // 생성된 프로젝트 데이터를 다루는 State
  let [nextNum, setNextNum] = useState(1); // 생성된 프로젝트 데이터의  고유한 ID 부여를 위한 State

  return (
    <>
      {/* --------- 상단 , 관리중인 프로젝터 --------- */}
      <div align="center" className="top">
        <h4>관리중인 프로젝트</h4>
      </div>
      <div>
        <Container>
          <Row>
            {list.map(function (a, i) {
              return <Managedlist key={i} num={i} list={list} con={a} />;
            })}
          </Row>
        </Container>
      </div>
      {/* --------- 상단 , 관리중인 프로젝터 --------- */}
      <hr align="center" />
      {/* --------- 하단 , 참여중인 프로젝터 --------- */}
      <div align="center">
        <h4>참여중인 프로젝트</h4>
      </div>
      <div>
        <Container>
          <Row>
            {list.map(function (a, i) {
              return <Participatinglist key={i} num={i} list={list} con={a} />;
            })}
            <Col sm={2}>
              <Card
                bg={'Light'.toLowerCase()}
                style={{ width: '11rem' }}
                className="mb-2"
              >
                <div>
                  <Card.Header align="center" className="header">
                    프로젝트 추가
                  </Card.Header>
                  <Card.Body align="center">
                    {/* ----- 프로젝트 추가 모달창 구현 ----- */}
                    <div style={{ marginTop: '-1px' }}>
                      <Button
                        className="btn_add"
                        variant="outline-secondary"
                        onClick={() => setModalIsOpen(true)}
                      >
                        프로젝트 추가
                      </Button>
                      <Modal
                        className="addModal addmodalBody"
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                      >
                        <div>
                          <ProjectListModalAdd
                            setModalIsOpen={setModalIsOpen}
                            list={list}
                            setList={setList}
                            nextNum={nextNum}
                            setNextNum={setNextNum}
                          />
                        </div>
                      </Modal>
                      {/* ----- 프로젝트 추가 모달창 구현 ----- */}
                    </div>
                    {/* ----- 프로젝트 참여 모달창 구현 ----- */}
                    <div style={{ marginTop: '19px' }}>
                      <Button
                        className="btn_join"
                        variant="outline-secondary"
                        onClick={() => setModalIsOpen1(true)}
                      >
                        프로젝트 참여
                      </Button>
                      <Modal
                        className="joinModal joinmodalBody"
                        isOpen={modalIsOpen1}
                        onRequestClose={() => setModalIsOpen1(false)}
                      >
                        <div>
                          <ProjectListModalJoin
                            setModalIsOpen={setModalIsOpen1}
                            list={list}
                            setList={setList}
                            nextNum={nextNum}
                            setNextNum={setNextNum}
                          />
                        </div>
                      </Modal>
                    </div>
                    {/* ----- 프로젝트 참여 모달창 구현 ----- */}
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* --------- 하단 , 참여중인 프로젝터 --------- */}
    </>
  );
}

export default Listpage;
