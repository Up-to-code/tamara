import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-shariah-compliance-header.html';
import body from '@/components/exact/ar-sa-shariah-compliance-body.html';
import footer from '@/components/exact/ar-sa-shariah-compliance-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"68627105aed40f3b4aec81dc","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
