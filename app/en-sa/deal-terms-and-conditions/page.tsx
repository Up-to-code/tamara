import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-deal-terms-and-conditions-header.html';
import body from '@/components/exact/en-sa-deal-terms-and-conditions-body.html';
import footer from '@/components/exact/en-sa-deal-terms-and-conditions-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"6885e5c259c4754926eb405c","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
