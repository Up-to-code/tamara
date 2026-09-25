import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-buyer-protection-header.html';
import body from '@/components/exact/ar-sa-buyer-protection-body.html';
import footer from '@/components/exact/ar-sa-buyer-protection-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"68872f226780c9ca9b9fe96c","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
