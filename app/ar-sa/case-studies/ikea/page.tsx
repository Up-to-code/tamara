import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-case-studies-ikea-header.html';
import body from '@/components/exact/ar-sa-case-studies-ikea-body.html';
import footer from '@/components/exact/ar-sa-case-studies-ikea-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"68e33a190b7b84e9f4f9b791","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
