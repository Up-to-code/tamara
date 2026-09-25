import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-candidate-privacy-notice-header.html';
import body from '@/components/exact/ar-sa-candidate-privacy-notice-body.html';
import footer from '@/components/exact/ar-sa-candidate-privacy-notice-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"692d6ed836b3449889254803","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
