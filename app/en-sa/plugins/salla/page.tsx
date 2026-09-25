import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-salla-header.html';
import body from '@/components/exact/en-sa-plugins-salla-body.html';
import footer from '@/components/exact/en-sa-plugins-salla-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"6886df8818e6f05a588818ca","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
