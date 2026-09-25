import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-whistleblower-policy-header.html';
import body from '@/components/exact/en-sa-whistleblower-policy-body.html';
import footer from '@/components/exact/en-sa-whistleblower-policy-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"68db85e055b8df420e045b92","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
