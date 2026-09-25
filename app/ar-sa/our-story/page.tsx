import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-our-story-header.html';
import body from '@/components/exact/ar-sa-our-story-body.html';
import footer from '@/components/exact/ar-sa-our-story-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"6954e0771708f1724adf0921","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
