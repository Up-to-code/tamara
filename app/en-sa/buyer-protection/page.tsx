import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-buyer-protection-header.html';
import body from '@/components/exact/en-sa-buyer-protection-body.html';
import footer from '@/components/exact/en-sa-buyer-protection-footer.html';
import inline from '@/components/exact/en-sa-buyer-protection.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
