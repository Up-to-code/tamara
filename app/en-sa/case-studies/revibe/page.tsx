import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-case-studies-revibe-header.html';
import body from '@/components/exact/en-sa-case-studies-revibe-body.html';
import footer from '@/components/exact/en-sa-case-studies-revibe-footer.html';
import inline from '@/components/exact/en-sa-case-studies-revibe.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
