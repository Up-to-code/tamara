import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-privacy-policy-header.html';
import body from '@/components/exact/en-sa-privacy-policy-body.html';
import footer from '@/components/exact/en-sa-privacy-policy-footer.html';
import inline from '@/components/exact/en-sa-privacy-policy.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
