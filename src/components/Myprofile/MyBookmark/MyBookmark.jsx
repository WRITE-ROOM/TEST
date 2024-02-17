import React, { useEffect, useState } from 'react'
import MyprofileSNB from '../MyprofileSNB/MyprofileSNB'
import { useNavigate } from 'react-router-dom'
import * as S from "../Account/Account.style"
import * as R from "./MyBookmark.style"
import WordBookMark from './WordBookmark/WordBookmark'
import NoteBookmark from './NoteBookmark/NoteBookmark'

export default function MyBookmark() {
  const localIndex = localStorage.getItem('tab')
  const [index, setIndex] = useState(localIndex);

	const tabArray=[
	{
    tabId: 0,
    tabTitle: '소재',
    tabCont:(
      <R.TabInfo>
        <WordBookMark/>
      </R.TabInfo>
    )
	},
	{
		tabId: 1,
		tabTitle: '노트',
		tabCont:(
			<R.TabInfo>
        <NoteBookmark/>
      </R.TabInfo>
  )
	}
];
	let navigate = useNavigate();


  const ClickTab = (tabId) => {
    setIndex(tabId);
    window.localStorage.setItem("tab", tabId);
  }

  useEffect(() => {
    setIndex(localIndex);
  }, []);
  return (
    <div>
      <S.Container>
        <MyprofileSNB />
        <S.Info>
          <S.Top>
            <p>북마크</p>
            <S.CloseBtn
              size="30"
              onClick={() => {
                navigate("/main");
              }}
            />
          </S.Top>
          <R.TabBox>
            {tabArray.map((item) => (
              <R.WordTab
                key={item.tabId}
                onClick={() => ClickTab(item.tabId)}
                isActive={index === item.tabId}
              >
                {item.tabTitle}
              </R.WordTab>
            ))}
          </R.TabBox>
          <div>
            {tabArray
              .filter((item) => index === item.tabId)
              .map((item) => (
                <div>{item.tabCont}</div>
              ))}
          </div>
        </S.Info>
      </S.Container>
    </div>
  );
}
