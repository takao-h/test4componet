import React, {Component} from 'react';
import './Caution.css';


const note001 = "SNS登校前に画像や動画、テキスト部分に関係性の明治屋必ハッシュタグなどが入っているかの確認を行います。再度、依頼内容をよく読み、画面の指示に従いお送りください。";
const note002 = ["運用事務局といつも使用している連絡方法で」投稿する画像（動画）ファイルをお送りください。"];
const note004 = ["期間内に下書きが完了にならない場合は、お支払いができません。", "依頼内容に沿わない場合には、下書き期間中に修正していただきます。"];
const stlye = ["caution-box", "attentino-box"];


const cautionBox = (prefix, note, styles) => {
  return (
    <div className={styles}>
      {prefix === null ? "" : <p>{prefix}</p>}
      <ul>
        {note.map(e => <li>{e}</li>)}
      </ul>
    </div>
  )
}

class Caution extends Component {
  render() {
    return (
      <div>
        {cautionBox("注意事項", note004, stlye[0])}
      </div>
    )
  }
}

export default Caution;